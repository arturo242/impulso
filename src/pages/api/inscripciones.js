import { supabase } from "@/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { childName, age, guardianName, phone, email, dateFrom, dateTo, notes, pricing } = req.body;

    if (!childName || !age || !guardianName || !phone || !email || !dateFrom || !dateTo || !pricing) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const { data, error } = await supabase
      .from('inscripciones')
      .insert([
        {
          nombre_nino: childName,
          edad: age,
          tutor: guardianName,
          telefono: phone,
          email: email,
          fecha_inicio: dateFrom,
          fecha_fin: dateTo,
          observaciones: notes,
          pago: pricing
        }
      ])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data[0]);
    
  } else if (req.method === "GET") {
    const { data, error } = await supabase
      .from('inscripciones')
      .select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
    
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}