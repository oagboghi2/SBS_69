CREATE TABLE books(
id SERIAL PRIMARY KEY,
title VARCHAR(255),
author VARCHAR(255),
genre VARCHAR(255),
img VARCHAR(255),
publisher VARCHAR(255)
);

INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'Fundamentals of Wavelets', 'Goswami, Jaideva', 'signal_processing','https://images-na.ssl-images-amazon.com/images/I/517FJQGelrL._SX312_BO1,204,203,200_.jpg', 'Wiley');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'Data Smart', 'Foreman, John', 'data_science','http://media.wiley.com/product_data/coverImage300/6X/11186614/111866146X.jpg', 'Wiley');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'God Created the Integers', 'Hawking, Stephen', 'mathematics','https://upload.wikimedia.org/wikipedia/en/thumb/d/db/God_Created_the_Integers.jpeg/220px-God_Created_the_Integers.jpeg', 'Penguin');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'Superfreakonomics', 'Dubner, Steve', 'economics','http://www.thecollegejuice.com/wp-content/uploads/2013/07/07-01-13-SuperFreakonomics-225x300.jpg', 'Harper Collins');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'Orientalism', 'Said, Edward', 'history','https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Orientalism%2C_first_edition.jpg/220px-Orientalism%2C_first_edition.jpg', 'Penguin');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'nature of Statistical Learning Theory, The', 'Vapnik, Vladmir', 'data_science','https://images-na.ssl-images-amazon.com/images/I/41DGQZQJh9L._SX327_BO1,204,203,200_.jpg', 'Springer');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'Integration of the Indian States', 'Menon, V P', 'history','http://ecx.images-amazon.com/images/I/41z1FmHgq9L._SX322_BO1,204,203,200_.jpg', 'Orient Blackswan');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'Drunkard\'/s Walk, The', 'Mlodinow, Leonard', 'science','https://images-na.ssl-images-amazon.com/images/I/51OWJW1YhUL._SX323_BO1,204,203,200_.jpg', 'Penguin');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'Image Processing & Mathematical Morphology', 'Shih, Frank', 'signal_processing','https://images-na.ssl-images-amazon.com/images/I/51mfCzcbblL._SX315_BO1,204,203,200_.jpg', 'CRC');
INSERT INTO books( title, author, genre, img, publisher ) VALUES( 'How to Think Like Sherlock Holmes, The', 'Konnikova, Maria', 'psychology','https://images-na.ssl-images-amazon.com/images/I/41aSxaeaixL._SX324_BO1,204,203,200_.jpg', 'Penguin');
