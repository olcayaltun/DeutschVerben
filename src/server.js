const express = require("express");
const textToSpeech = require("@google-cloud/text-to-speech");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const client = new textToSpeech.TextToSpeechClient();

app.post("/synthesize", async (req, res) => {
  const { text, speaker } = req.body;

  const request = {
    input: { text },
    voice: {
      languageCode: "de-DE",
      name:
        speaker === "Professor Weber" ? "de-DE-Wavenet-B" : "de-DE-Wavenet-C", // Erkek ve kadın sesleri
    },
    audioConfig: {
      audioEncoding: "MP3",
      speakingRate: 0.9,
      pitch: speaker === "Professor Weber" ? -2 : 2,
    },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    res.json({ audioContent: response.audioContent.toString("base64") });
  } catch (error) {
    console.error("Hata:", error);
    res.status(500).json({ error: "Seslendirme başarısız" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
