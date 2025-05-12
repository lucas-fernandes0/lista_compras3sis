// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://daezjswznstiyapohwna.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZXpqc3d6bnN0aXlhcG9od25hIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUzNTU1NiwiZXhwIjoyMDYyMTExNTU2fQ.xsPMIFaBJ2_dZbGfkPac_AM1iZyJS9-D4rImsXnsoLM'
)