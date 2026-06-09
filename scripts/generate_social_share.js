import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateSocialShare() {
  console.log('Sākās sociālo tīklu priekšskatījuma bilžu ģenerēšana...');

  try {
    const publicDir = path.resolve('public/images');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const distDir = path.resolve('dist/images');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    // Lejupielādējam oriģinālo Margrietas ziedu no R2 krātuves
    const daisyUrl = 'https://pub-125a4c281d7c440d9eaaedcb178381f9.r2.dev/Margrieta.webp';
    console.log(`Lejupielādē Margrietas ziedu no ${daisyUrl}...`);
    
    let baseMargrieta;
    try {
      const response = await fetch(daisyUrl);
      if (response.ok) {
        const imageBytes = await response.arrayBuffer();
        baseMargrieta = Buffer.from(imageBytes);
        console.log('Margrietas zieda attēls sekmīgi lejupielādēts.');
      } else {
        console.warn(`Zieda lejupielādes kļūda: status ${response.status}`);
      }
    } catch (e) {
      console.warn('Neizdevās lejupielādēt Margrietu, tiks izmantota rezerves grafika:', e.message);
    }

    // ====================================================================
    // 1. GENERĒJAM LIELO ATTEĒLU (1200x630) - social_share_v1.png
    // ====================================================================
    console.log('Veido lielo sociālo tīklu bildi (social_share_v1.png)...');
    const largeSvgText = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <!-- Balts fons -->
      <rect width="1200" height="630" fill="#ffffff" />
      
      <!-- Latvijas karoga karmīnsarkanā josla apakšā -->
      <rect x="0" y="618" width="1200" height="12" fill="#9e1b32" />
      
      <!-- Teksta sadaļas ar inline stiliem, kas garantē to renderēšanu visās vidēs -->
      <text x="600" y="410" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="38" font-weight="900" fill="#18181b" letter-spacing="0.5" text-anchor="middle">BIEDRĪBA LATVIJAS RESTARTS</text>
      <text x="600" y="465" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="20" font-weight="500" fill="#4b5563" text-anchor="middle">Neatkarīga organizācija modernai, tiesiskai un ekonomiski spēcīgai Latvijai</text>
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
    console.log(`Lielais attēls (social_share_v1.png) sekmīgi saglabāts.`);


    // ====================================================================
    // 2. GENDERĒJAM MAZO KVADRĀTISKO LOGOTIPU (300x300) - logo_share.png
    // ====================================================================
    console.log('Veido kvadrātisko logotipu ar lietotāja augšupielādēto LATRES.png attēlu...');
    
    const latresPath = path.resolve('LATRES.png');
    let squareImage;
    if (fs.existsSync(latresPath)) {
      console.log(`Atrasts LATRES.png fails, apstrādājam to uz precīzu 1x1 (300x300px) izmēru...`);
      squareImage = await sharp(latresPath)
        .resize(300, 300, {
          fit: 'cover' // Nodrošina perfektu 1:1 proporciju dabiski bez attēla kropļošanas
        })
        .png()
        .toBuffer();
    } else {
      console.warn('LATRES.png netika atrasts! Izmantojam rezerves balto 300x300 attēlu...');
      const fallbackSvg = `
      <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#ffffff" />
        <text x="150" y="125" font-family="system-ui, sans-serif" font-size="80" font-weight="900" fill="#18181b" text-anchor="middle">LAT</text>
        <text x="150" y="225" font-family="system-ui, sans-serif" font-size="80" font-weight="900" fill="#9e1b32" text-anchor="middle">RES</text>
      </svg>
      `;
      squareImage = await sharp(Buffer.from(fallbackSvg))
        .png()
        .toBuffer();
    }

    // Saglabājam logo_share.png abās vietās (public un dist)
    const publicSqPath = path.join(publicDir, 'logo_share.png');
    const distSqPath = path.join(distDir, 'logo_share.png');
    
    fs.writeFileSync(publicSqPath, squareImage);
    fs.writeFileSync(distSqPath, squareImage);
    console.log(`Mazais kvadrātiskais logo (logo_share.png) sekmīgi saglabāts (${publicSqPath})`);

    // Dzēšam vecos pagaidu failus, ja tādi ir, lai nerastos juceklis
    const oldPublicSq = path.join(publicDir, 'logo_share_v2.png');
    const oldDistSq = path.join(distDir, 'logo_share_v2.png');
    if (fs.existsSync(oldPublicSq)) fs.unlinkSync(oldPublicSq);
    if (fs.existsSync(oldDistSq)) fs.unlinkSync(oldDistSq);

    console.log('Viss process pabeigts sekmīgi!');
  } catch (error) {
    console.error('Kļūda attēla ģenerēšanas laikā:', error);
    process.exit(1);
  }
}

generateSocialShare();
