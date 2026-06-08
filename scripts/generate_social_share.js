import { Jimp, loadFont, measureText } from 'jimp';
import { SANS_32_BLACK, SANS_16_BLACK } from 'jimp/fonts';
import fs from 'fs';
import path from 'path';

async function generateSocialShare() {
  console.log('Izveido jaunu sociālo tīklu priekšskatījuma bildi (social_share_v1.png)...');

  try {
    // 1. Izveidojam tīru baltu fonu 1200x630
    const image = new Jimp({ width: 1200, height: 630, color: 0xffffffff });

    const cx = 600;
    const cy = 210;

    // Helperis solid apļu uzzīmēšanai
    function fillCircle(img, x0, y0, r, colorHex) {
      for (let y = -r; y <= r; y++) {
        for (let x = -r; x <= r; x++) {
          if (x * x + y * y <= r * r) {
            const px = x0 + x;
            const py = y0 + y;
            if (px >= 0 && px < 1200 && py >= 0 && py < 630) {
              img.setPixelColor(colorHex, px, py);
            }
          }
        }
      }
    }

    // Helperis taisnstūru uzzīmēšanai
    function fillRect(img, x, y, w, h, colorHex) {
      for (let dy = 0; dy < h; dy++) {
        for (let dx = 0; dx < w; dx++) {
          const px = x + dx;
          const py = y + dy;
          if (px >= 0 && px < 1200 && py >= 0 && py < 630) {
            img.setPixelColor(colorHex, px, py);
          }
        }
      }
    }

    // 2. Programmatiski uzzīmējam Biedrības "Latvijas Restarts" simbolu - eleganto Margrietas ziedu
    // Latvijas karmīnsarkanais tonis: #9e1b32
    // Silti dzeltenais zieda viducis: #dfb332
    const latvianCrimson = 0x9e1b32ff;
    const goldenCenter = 0xdfb332ff;

    // Zīmējam 12 ziedlapiņas (petals) apkārt centram, samazinātas aptuveni 3 reizes pēc lietotāja lūguma
    const numPetals = 12;
    const radiusPetal = 8;
    const offset = 15;

    for (let i = 0; i < numPetals; i++) {
      const angle = (i * 2 * Math.PI) / numPetals;
      const petalX = Math.round(cx + Math.cos(angle) * offset);
      const petalY = Math.round(cy + Math.sin(angle) * offset);
      fillCircle(image, petalX, petalY, radiusPetal, latvianCrimson);
    }

    // Zīmējam zelta viduci pāri ziedlapu pamatnei
    fillCircle(image, cx, cy, 9, goldenCenter);

    // 3. Ielādējam Jimp fontus un uzzīmējam tekstus
    const font = await loadFont(SANS_32_BLACK);
    const fontSmall = await loadFont(SANS_16_BLACK);

    // Pamatteksts ar standarta ASCII burtiem
    const brandText = 'BIEDRIBA LATVIJAS RESTARTS';
    const descText = 'Modernai, tiesiskai un ekonomiski specigai Latvijai';

    const brandWidth = measureText(font, brandText);
    const brandX = Math.round((1200 - brandWidth) / 2);
    const brandY = 370;

    const descWidth = measureText(fontSmall, descText);
    const descX = Math.round((1200 - descWidth) / 2);
    const descY = 440;

    // Drukājam pamattekstus
    image.print({ font, x: brandX, y: brandY, text: brandText });
    image.print({ font: fontSmall, x: descX, y: descY, text: descText });

    // 4. Uzklājam latviešu garumzīmes (ā, ē, ī, ū) programmatiski no pikseļiem
    const charcoalColor = 0x18181bff; // ogles melna teksta zīmēm

    function drawMacron(img, xCenter, y, width = 16, thickness = 3) {
      fillRect(img, xCenter - Math.round(width / 2), y, width, thickness, charcoalColor);
    }

    // 'BIEDRĪBA': garumzīme virs 'I' (6. burts, indekss 5)
    // Izmērām platumu vārdam 'BIEDR'
    const brandPrefix = 'BIEDR';
    const brandPrefixWidth = measureText(font, brandPrefix);
    const letterI_CX = brandX + brandPrefixWidth + 6;
    drawMacron(image, letterI_CX, brandY + 4, 14, 3); // Garumzīme virs I

    // 'spēcīgai': 'specigai' (garumzīmes virs 'e' un 'i')
    // 'specigai' sākums ir vārdā pēc 'Modernai, tiesiskai un ekonomiski '
    const descPrefixE = 'Modernai, tiesiskai un ekonomiski sp';
    const descPrefixWidthE = measureText(fontSmall, descPrefixE);
    const letterE_CX = descX + descPrefixWidthE - 3;
    drawMacron(image, letterE_CX, descY + 4, 10, 2); // Garumzīme virs 'e'

    const descPrefixI = 'Modernai, tiesiskai un ekonomiski speci';
    const descPrefixWidthI = measureText(fontSmall, descPrefixI);
    const letterDescI_CX = descX + descPrefixWidthI - 2;
    drawMacron(image, letterDescI_CX, descY + 4, 8, 2); // Garumzīme virs 'i'

    // Latvijas karodziņa sarkanais akcents apakšā
    fillRect(image, 0, 618, 1200, 12, 0x9e1b32ff);

    // 5. Saglabājam abās nepieciešamajās vietās
    const publicDir = path.resolve('public/images');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const distDir = path.resolve('dist/images');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    const publicPath = path.join(publicDir, 'social_share_v1.png');
    await image.write(publicPath);
    console.log(`Attēls saglabāts public mapē: ${publicPath}`);

    const distPath = path.join(distDir, 'social_share_v1.png');
    await image.write(distPath);
    console.log(`Attēls saglabāts dist mapē: ${distPath}`);

    console.log('Attēla ģenerēšana pabeigta sekmīgi!');
  } catch (error) {
    console.error('Kļūda attēla ģenerēšanas laikā:', error);
    process.exit(1);
  }
}

generateSocialShare();
