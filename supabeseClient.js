// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://daezjswznstiyapohwna.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZXpqc3d6bnN0aXlhcG9od25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1NTYsImV4cCI6MjA2MjExMTU1Nn0.W6ds4DAC_TXXWFfjhIKy9hAP_7AleM21NNen6q5uJsc'
)