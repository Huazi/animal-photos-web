CREATE TABLE animal_categories (
    id SERIAL PRIMARY KEY,
    category character varying(255)
);

CREATE TABLE animal_photos (
    id SERIAL PRIMARY KEY,
    category_id SERIAL REFERENCES animal_categories(id),
    photo_url text
);
