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

    // Lejupielādējam oriģinālo Margrietas ziedu no R2 krātuves (tam ir ideāla izšķirtspēja un caurspīdīgums)
    const daisyUrl = 'https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta.webp';
    console.log(`Lejupielādē Margrietas ziedu no ${daisyUrl}...`);
    
    const response = await fetch(daisyUrl);
    if (!response.ok) {
      throw new Error(`Neizdevās ielādēt Margrietas zieda attēlu: status ${response.status}`);
    }
    
    const imageBytes = await response.arrayBuffer();
    const webpBuffer = Buffer.from(imageBytes);

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
      
      <!-- Teksta sadaļas ar pareizu izlīdzināšanu un garumzīmēm -->
      <text x="600" y="410" class="brand-title" text-anchor="middle">BIEDRĪBA LATVIJAS RESTARTS</text>
      <text x="600" y="465" class="brand-desc" text-anchor="middle">Neatkarīga organizācija modernai, tiesiskai un ekonomiski spēcīgai Latvijai</text>
    </svg>
    `;

    // Resizojam margrietu liela izmēra bildei (izmērs 150x150px)
    console.log('Apstrādā margrietas zieda attēlu lielajam izkārtojumam...');
    const largeFlowerBuffer = await sharp(webpBuffer)
      .resize(150, 150)
      .png()
      .toBuffer();

    // Kompozitējam lielo attēlu
    console.log('Kompozitē lielo attēlu...');
    const largeImage = await sharp(Buffer.from(largeSvgText))
      .composite([{ input: largeFlowerBuffer, left: 525, top: 160 }])
      .png()
      .toBuffer();

    // Saglabājam lielo attēlu abās vajadzīgajās vietās
    const publicLargePath = path.join(publicDir, 'social_share_v1.png');
    const distLargePath = path.join(distDir, 'social_share_v1.png');
    fs.writeFileSync(publicLargePath, largeImage);
    fs.writeFileSync(distLargePath, largeImage);
    console.log(`Lielais attēls sekmīgi saglabāts (${publicLargePath})`);


    // ====================================================================
    // 2. GENDERĒJAM MAZO KVADRĀTISKO LOGOTIPU (300x300) - logo_share_v2.png
    // ====================================================================
    console.log('Veido kvadrātisko logotipu (logo_share_v2.png)...');
    const squareSvgText = `
    <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .brand-latv {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 26px;
            font-weight: 900;
            fill: #18181b;
            letter-spacing: -0.5px;
          }
          .brand-rest {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 26px;
            font-weight: 900;
            fill: #9e1b32;
            letter-spacing: -0.5px;
          }
        </style>
      </defs>
      
      <!-- Balts fons -->
      <rect width="300" height="300" fill="#ffffff" />
      
      <!-- Latvijas karoga dekoratīvās līnijas elegantam rāmim -->
      <rect x="0" y="0" width="300" height="10" fill="#9e1b32" />
      <rect x="0" y="290" width="300" height="10" fill="#9e1b32" />
      
      <!-- Divrindu zīmols identisks mājaslapas augšdaļai (ar pareizām garumzīmēm) -->
      <text x="118" y="142" class="brand-latv">LATVIJAS</text>
      <text x="118" y="176" class="brand-rest">RESTARTS</text>
    </svg>
    `;

    // Resizojam margrietu mazā izmēra bildei (izmērs 75x75px)
    const squareFlowerBuffer = await sharp(webpBuffer)
      .resize(75, 75)
      .png()
      .toBuffer();

    // Kompozitējam mazo attēlu (zieds kreisajā pusē no teksta)
    console.log('Kompozitē mazo kvadrātisko attēlu...');
    const squareImage = await sharp(Buffer.from(squareSvgText))
      .composite([{ input: squareFlowerBuffer, left: 28, top: 110 }])
      .png()
      .toBuffer();

    // Saglabājam mazo kvadrātisko attēlu abās vajadzīgajās vietās
    const publicSqPath = path.join(publicDir, 'logo_share_v2.png');
    const distSqPath = path.join(distDir, 'logo_share_v2.png');
    fs.writeFileSync(publicSqPath, squareImage);
    fs.writeFileSync(distSqPath, squareImage);
    console.log(`Mazais kvadrātiskais logo sekmīgi saglabāts (${publicSqPath})`);

    console.log('Visu attēlu ģenerēšana pabeigta sekmīgi un bez kļūdām!');
  } catch (error) {
    console.error('Kļūda attēla ģenerēšanas laikā:', error);
    process.exit(1);
  }
}

generateSocialShare();
