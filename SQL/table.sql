CREATE TABLE public.products
(
    product_id serial NOT NULL,
    name character varying(100) NOT NULL,
    "desc" text,
    price character varying(12) NOT NULL,
    qty integer NOT NULL,
    PRIMARY KEY (product_id)
);