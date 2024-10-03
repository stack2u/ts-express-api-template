INSERT INTO public.profiles
(id, description, is_admin)
VALUES('a74a60d6-3fd5-4a7e-a965-3ac8beb7362a', 'administrator', true);

INSERT INTO public.users
(id, "name", email, whatsapp, avatar, "password", id_profile)
VALUES('595e361b-bf2b-4246-b0c4-f5c245d300ed', 'Administrador', 'admin@flixbank.com.br', '99999999999', NULL, '$2b$10$JCgtlsoL3a.Gjy/dPOnC/uZqQ2OxX/wIZmHnIqTKb33B7c6e8waKi', 'a74a60d6-3fd5-4a7e-a965-3ac8beb7362a');
