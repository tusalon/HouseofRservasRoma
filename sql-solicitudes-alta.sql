-- Solicitudes de alta que llegan desde tusalon.github.io/HouseofRservasRoma
-- (el formulario de la landing y la pagina corta alta.html).
-- Ejecutar una sola vez en el SQL Editor de Supabase.
--
-- POR QUE ESTA TABLA
-- Antes el formulario solo abria WhatsApp con el texto armado: si la salonera
-- no le daba "enviar", el lead se perdia sin dejar rastro. Ahora cada envio
-- queda guardado aca ademas de abrir WhatsApp, y el panel local los lista para
-- darles de alta sin volver a teclear los datos.

create table if not exists public.solicitudes_alta (
  id uuid primary key default gen_random_uuid(),
  nombre_salon text not null,
  whatsapp text not null,
  email text not null,
  plataforma text,                              -- 'android' | 'ios' | null
  estado text not null default 'pendiente',     -- 'pendiente' | 'creado' | 'descartado'
  slug_creado text,                             -- se llena al darle de alta
  nota text,
  origen text,                                  -- 'landing' | 'alta-corta'
  created_at timestamptz not null default now(),
  atendida_at timestamptz
);

-- El panel solo mira las pendientes, ordenadas por fecha.
create index if not exists solicitudes_alta_pendientes_idx
  on public.solicitudes_alta (created_at desc)
  where estado = 'pendiente';

alter table public.solicitudes_alta enable row level security;

-- Cualquiera puede ENVIAR una solicitud (es un formulario publico) pero nadie
-- puede leerlas con la clave anon: esa clave viaja dentro de todas las apps
-- publicadas, asi que dejarla leer seria publicar los datos de contacto de
-- cada salonera interesada. Leer y actualizar queda solo para service_role,
-- que vive unicamente en el config.js del panel local.
drop policy if exists "solicitudes_alta: enviar formulario" on public.solicitudes_alta;
create policy "solicitudes_alta: enviar formulario"
  on public.solicitudes_alta for insert
  to anon, authenticated
  with check (true);

-- service_role ignora RLS por definicion, asi que no necesita politica propia.
-- No se crea ninguna politica de select/update/delete: sin politica, anon no
-- puede hacer nada de eso.

comment on table public.solicitudes_alta is
'Leads de alta que entran por la landing HouseofRservasRoma. Insert publico, lectura solo con service_role desde el panel local.';
