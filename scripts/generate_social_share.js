import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateSocialShare() {
  console.log('Izveido jaunu sociālo tīklu priekšskatījuma bildi (social_share_v1.png)...');

  try {
    const publicDir = path.resolve('public/images');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const distDir = path.resolve('dist/images');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    // Lejupielādējam oriģinālo Margrietas ziedu no R2 krātuves (priekš lielā attēla)
    const daisyUrl = 'https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta.webp';
    console.log(`Lejupielādē Margrietas ziedu no ${daisyUrl}...`);
    
    let baseMargrieta;
    try {
      const response = await fetch(daisyUrl);
      if (response.ok) {
        const imageBytes = await response.arrayBuffer();
        baseMargrieta = Buffer.from(imageBytes);
      }
    } catch (e) {
      console.warn('Neizdevās ielādēt Margrietu lielajai bildei, tiks izmantots drošais teksts:', e.message);
    }

    // ====================================================================
    // 1. GENDERĒJAM LIELO ATTEĒLU (1200x630) - social_share_v1.png
    // ====================================================================
    const largeSvgText = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .brand-title {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 38px;
            font-weight: 900;
            fill: #18181b;
            letter-spacing: 0.5px;
          }
          .brand-desc {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 20px;
            font-weight: 500;
            fill: #4b5563;
          }
        </style>
      </defs>
      
      <!-- Balts fons -->
      <rect width="1200" height="630" fill="#ffffff" />
      
      <!-- Latvijas karoga karmīnsarkanā josla apakšā -->
      <rect x="0" y="618" width="1200" height="12" fill="#9e1b32" />
      
      <!-- Teksta sadaļas -->
      <text x="600" y="410" class="brand-title" text-anchor="middle">BIEDRĪBA LATVIJAS RESTARTS</text>
      <text x="600" y="465" class="brand-desc" text-anchor="middle">Neatkarīga organizācija modernai, tiesiskai un ekonomiski spēcīgai Latvijai</text>
    </svg>
    `;

    // Kompozitējam lielo attēlu
    let largeImage;
    if (baseMargrieta) {
      const largeFlowerBuffer = await sharp(baseMargrieta)
        .resize(150, 150)
        .png()
        .toBuffer();
      
      largeImage = await sharp(Buffer.from(largeSvgText))
        .composite([{ input: largeFlowerBuffer, left: 525, top: 160 }])
        .png()
        .toBuffer();
    } else {
      largeImage = await sharp(Buffer.from(largeSvgText))
        .png()
        .toBuffer();
    }

    // Saglabājam lielo attēlu abās vietās
    fs.writeFileSync(path.join(publicDir, 'social_share_v1.png'), largeImage);
    fs.writeFileSync(path.join(distDir, 'social_share_v1.png'), largeImage);
    console.log(`Lielais attēls sekmīgi saglabāts.`);


    // ====================================================================
    // 2. GENDERĒJAM MAZO KVADRĀTISKO LOGOTIPU (200x200) - logo_share.png
    // ====================================================================
    console.log('Veido kvadrātisko logotipu (logo_share.png)...');
    
    // Mēs pilnībā centrējam "LATVIJAS RESTARTS" tekstu bez jebkāda zieda, un precīzās krāsās:
    // "LATVIJAS" -> #18181b (tumšs charcoal/zinc kā mājaslapā kreisajā augšpusē)
    // "RESTARTS" -> #9e1b32 (Latvijas sarkanais)
    const squareSvgText = `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .brand-latv {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 24px;
            font-weight: 900;
            fill: #18181b;
            letter-spacing: -0.5px;
          }
          .brand-rest {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 24px;
            font-weight: 900;
            fill: #9e1b32;
            letter-spacing: -0.5px;
          }
        </style>
      </defs>
      
      <!-- Tīri balts fons -->
      <rect width="200" height="200" fill="#ffffff" />
      
      <!-- Divu rindu zīmols ideāli iecentrēts pa vidu un bez margrietas -->
      <text x="100" y="85" class="brand-latv" text-anchor="middle" dominant-baseline="middle">LATVIJAS</text>
      <text x="100" y="122" class="brand-rest" text-anchor="middle" dominant-baseline="middle">RESTARTS</text>
    </svg>
    `;

    // Konvertējam SVG uz maksimāli asu PNG ar Sharp
    const squareImage = await sharp(Buffer.from(squareSvgText))
      .png()
      .toBuffer();

    // Saglabājam logo_share.png abās vietās (public un dist)
    const publicSqPath = path.join(publicDir, 'logo_share.png');
    const distSqPath = path.join(distDir, 'logo_share.png');
    
    fs.writeFileSync(publicSqPath, squareImage);
    fs.writeFileSync(distSqPath, squareImage);
    console.log(`Mazais kvadrātiskais logo (logo_share.png) sekmīgi saglabāts bez ziedlapām (${publicSqPath})`);

    // Dzēšam vecos pagaidu failus, ja tādi ir, lai nerastos juceklis
    const oldPublicSq = path.join(publicDir, 'logo_share_v2.png');
    const oldDistSq = path.join(distDir, 'logo_share_v2.png');
    if (fs.existsSync(oldPublicSq)) fs.unlinkSync(oldPublicSq);
    if (fs.existsSync(oldDistSq)) fs.unlinkSync(oldDistSq);

    console.log('Visu attēlu ģenerēšana pabeigta sekmīgi!');
  } catch (error) {
    console.error('Kļūda attēla ģenerēšanas laikā:', error);
    process.exit(1);
  }
}

generateSocialShare();
