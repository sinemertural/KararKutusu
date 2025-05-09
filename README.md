# 📚 Karar Kutusu – Seçim Tabanlı Hikaye Uygulaması

Karar Kutusu, kullanıcıların interaktif hikayeler okuyarak her bölümde seçimler yaptığı, seçimlerine göre hikayenin farklı sonlara ulaştığı React Native tabanlı bir mobil uygulamadır. Uygulama, kullanıcı geçmişini yerel olarak saklar ve seçim geçmişini görsel olarak sunar.

---

## 🚀 Kurulum

1. Bu repoyu klonlayın:

```bash
git clone https://github.com/kullaniciadi/karar-kutusu.git
cd karar-kutusu
```

2. Gerekli bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn
```

3. Eğer Expo yüklü değilse global olarak yükleyin:

```bash
npm install -g expo-cli
```

---

## ▶️ Çalıştırma

```bash
expo start
```

- QR kodu Expo Go uygulamasıyla okutun.
- Android Emulator ya da iOS Simulator ile çalıştırmak için terminalden `a` veya `i` tuşuna basabilirsiniz.

---

## 🧪 Test Etme

Bu uygulama için manuel test öngörülmüştür:

1. Uygulama açıldığında hikaye listesini göreceksiniz.
2. Herhangi bir hikayeyi seçin, seçimlerinizi yaparak hikayeyi tamamlayın.
3. "📊 İlerlemeni Gör" bölümünden seçim geçmişinizi kontrol edin.
4. "📌 Devam Et" butonuyla kaldığınız yerden devam edebilirsiniz.
5. Hikaye sonlandığında "🎉 Bitir ve Sonucu Gör" butonuyla sonuç ekranına ulaşabilirsiniz.

---

## 🗂️ Proje Yapısı (Özet)

```
KararKutusu/
│
├── assets/
├── components/
├── data/
│   └── storyData.json
├── navigation/
│   └── AppNavigator.tsx
├── redux/
│   ├── historySlice.ts
│   └── store.ts
├── screens/
│   ├── HomeScreen.tsx
│   ├── StoryScreen.tsx
│   ├── ResultScreen.tsx
│   └── TimelineScreen.tsx
├── App.tsx
└── README.md
```

---

## 🧠 Kullanılan Teknolojiler

- React Native
- Redux Toolkit
- AsyncStorage
- Expo
- TypeScript
- Nativewind (Tailwind benzeri stillendirme)

---

## 📸 Uygulama Görselleri

![Screenshot_1746780510](https://github.com/user-attachments/assets/ee3fc824-8b7e-4859-adee-a961f38e76c2)
![Screenshot_1746780515](https://github.com/user-attachments/assets/ec19c559-e40e-4695-a056-f6c342208a94)
![Screenshot_1746780520](https://github.com/user-attachments/assets/9e3dd5c3-4603-43a4-b6ad-a1d55741b955)
![Screenshot_1746780522](https://github.com/user-attachments/assets/aa1dafb1-a8ac-4448-b070-7d50b35e5c33)
![Screenshot_1746780527](https://github.com/user-attachments/assets/ed0e5f00-3cd1-4c1b-a83f-7ae64ccdc872)


Ana sayfa, hikaye adımları, ilerleme ve sonuç ekranları uygulama içerisinde yer almaktadır.

---

İyi okumalar! 📖✨
