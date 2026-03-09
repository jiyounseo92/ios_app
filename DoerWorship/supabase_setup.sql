create table if not exists public.doer_worship_state (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  source text not null default 'app'
);

alter table public.doer_worship_state enable row level security;

do $$
begin
  if exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'doer_worship_state' and policyname = 'doer_state_select'
  ) then
    drop policy doer_state_select on public.doer_worship_state;
  end if;
  if exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'doer_worship_state' and policyname = 'doer_state_insert'
  ) then
    drop policy doer_state_insert on public.doer_worship_state;
  end if;
  if exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'doer_worship_state' and policyname = 'doer_state_update'
  ) then
    drop policy doer_state_update on public.doer_worship_state;
  end if;
end
$$;

create policy doer_state_select
on public.doer_worship_state
for select
using (true);

create policy doer_state_insert
on public.doer_worship_state
for insert
with check (true);

create policy doer_state_update
on public.doer_worship_state
for update
using (true)
with check (true);
