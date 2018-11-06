CREATE DATABASE IF NOT EXISTS MovieTimes;

use MovieTimes;

CREATE TABLE IF NOT EXISTS MovieTimes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie VARCHAR(100),
    theater VARCHAR(100),
    Address VARCHAR(300),
    Date DATE,
    latitude DECIMAL(20, 2) DEFAULT NULL,
    longitude DECIMAL(20, 2) DEFAULT NULL,
    times VARCHAR(300),
    movie_id INT
);



INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Salad withdrawal', '25688 Kuhlman Trafficway, New Aliyashire, Florida, 17154', '2018-10-25', -55.1584, -150.5243, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Personal Loan Account Automated Senior', '717 Edmund Isle, Elisabethland, Georgia, 22823-8702', '2018-10-25', 75.9224, -69.4388, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Music Customer', '64362 Otis Plains, Monserratside, Arizona, 63492', '2018-10-25', 74.0823, -57.3919, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Plastic', '500 Corwin Lake, South Alvenatown, Alaska, 14003', '2018-10-24', 31.8644, 37.3472, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'SMTP client-server Rand', '3764 Wyman Vista, Klockoside, Arkansas, 03186-1774', '2018-10-25', 35.4229, 57.0354, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Operations connecting Computers', '1390 Deonte Terrace, Port Francesmouth, North Dakota, 65837-6890', '2018-10-25', -27.0446, -13.1471, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'transmitter Fresh', '562 Jacynthe Place, Jenamouth, Indiana, 91378-8794', '2018-10-25', -74.2515, -124.9459, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'parse Response', '58873 Baumbach Expressway, Legroston, California, 57750-1163', '2018-10-24', 87.6584, 27.9684, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'out-of-the-box', '04469 Littel Key, Wunschstad, Mississippi, 93036-1992', '2018-10-24', 68.3963, 26.9185, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Personal Loan Account', '086 Noemi Port, Port Krystina, New Mexico, 56687-2947', '2018-10-25', 3.6313, -84.7138, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Cambridgeshire', '6125 Ceasar Cove, New Jorge, Missouri, 60248', '2018-10-24', 37.9296, -29.8026, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'parsing', '8176 Ebert Estate, Kovacekbury, Utah, 65142', '2018-10-25', -9.6643, 116.9534, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Mauritius New York', '138 Annalise Skyway, Johnniemouth, New Hampshire, 46185', '2018-10-25', -3.7037, 33.2991, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Fantastic Rubber Salad uniform Investment Account', '79332 Jamison Plains, Port Dana, Connecticut, 34960-6665', '2018-10-25', 3.2140, -68.2980, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'USB', '446 Alda Harbor, Lake Ferneside, Louisiana, 95940', '2018-10-25', 36.9713, -0.2466, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'wireless Engineer', '6552 Marty Square, Bradenchester, Kansas, 39808', '2018-10-25', -86.3507, 155.9645, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'violet Factors Avon', '06081 Octavia Falls, Port Deionhaven, New York, 90387-8941', '2018-10-25', 74.8004, 78.5213, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Rapids Garden Flats', '92598 Ebert Trail, West Dawsonview, Colorado, 75376-6429', '2018-10-25', -14.4527, 145.5702, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'sticky', '936 Terry Inlet, Brekketown, Florida, 97493', '2018-10-25', -34.1320, -105.8244, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Kentucky', '63764 Tomas Square, McClureview, South Dakota, 73119-7219', '2018-10-25', -77.4048, -92.2933, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Designer withdrawal', '354 Vance Brooks, Moenfort, Indiana, 18593', '2018-10-25', 6.9177, -29.5916, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'payment', '834 Williamson Manors, Johnnytown, Indiana, 09842', '2018-10-24', 72.1370, -114.6216, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'alarm', '240 Jayce Freeway, Howeburgh, North Carolina, 52894', '2018-10-24', 71.0020, -129.6339, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'card', '4523 Destany Bridge, New Josefa, Vermont, 00108', '2018-10-25', 13.3532, 128.5773, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'granular', '64536 Shaina Brooks, Judsonview, Nevada, 13530-3966', '2018-10-25', -61.2112, 64.2789, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Illinois', '1546 Maureen Locks, Gusville, Colorado, 73197', '2018-10-25', -54.2473, -99.0897, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Soft hybrid Cambridgeshire', '8586 Jadyn Mission, North Rosetta, Alabama, 85302-1911', '2018-10-24', -29.5047, 58.6813, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'web-enabled Kansas', '1174 Julien Mission, Wisozktown, Arkansas, 07824-5339', '2018-10-24', 37.7436, -10.2838, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Profound e-services withdrawal', '03213 Franecki Stravenue, Kyleeville, Ohio, 10735-5519', '2018-10-24', -26.9277, -20.2978, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Jewelery Industrial Sports', '72123 Ernser Alley, Ilaville, Ohio, 59245', '2018-10-25', 10.7797, -55.3272, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Product', '00783 Dibbert Plaza, Emmaland, Wyoming, 07047', '2018-10-24', 59.6509, -136.7096, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Rustic Steel Keyboard Ball Auto Loan Account', '2724 Clay Fields, Port Retha, Arizona, 05856-9725', '2018-10-25', -12.5082, -78.0663, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Electronics multi-byte capacitor', '4076 Conner Extension, Stokesborough, Georgia, 29447', '2018-10-25', 69.1431, 2.8374, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Azerbaijanian Manat', '736 McDermott Isle, South Vita, Alabama, 68755-8484', '2018-10-25', 19.7414, 112.8411, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'connect Producer', '985 Dandre View, North Mohammedmouth, Oregon, 17183', '2018-10-25', -74.1497, 26.1496, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Estates Bedfordshire application', '54470 Shemar Harbors, Kozeyland, California, 25036', '2018-10-24', 88.1514, 2.8696, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Programmable quantifying Pants', '641 Franz Causeway, West Ricoburgh, Utah, 34192', '2018-10-25', -87.3351, 114.6356, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Consultant', '5376 Murray Run, Leoramouth, West Virginia, 53658-9134', '2018-10-25', 17.4661, 155.6943, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Developer Bedfordshire', '733 Arnaldo Mission, West Aglae, Iowa, 50794-8927', '2018-10-25', -6.4234, 121.1260, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Grocery deposit plum', '752 Dylan Greens, West Nickolasburgh, Wisconsin, 61070', '2018-10-25', -62.2079, -106.8887, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Analyst', '13680 Abraham Valley, East Daisha, Louisiana, 13633', '2018-10-24', -0.4896, 113.5355, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Minnesota definition enable', '468 Heller Estates, West Rosettamouth, Nebraska, 78841', '2018-10-24', 29.6281, -139.2192, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Concrete Ergonomic', '292 Marilyne Valleys, Lake Timothy, Nevada, 26949-3220', '2018-10-25', 53.1323, 82.2101, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Towels', '492 Marlen Streets, Rosendohaven, Delaware, 29585', '2018-10-25', -69.4837, 147.5574, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Credit Card Account repurpose Sleek Cotton Soap', '9583 Rohan Crescent, Goyetteborough, Florida, 86223-2604', '2018-10-24', -12.7144, 23.1741, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Garden plum', '73533 Sawayn Groves, Heidenreichbury, California, 58388', '2018-10-24', 16.7376, -120.5482, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'innovate', '81955 Cormier Canyon, North Ryleymouth, Tennessee, 19618', '2018-10-25', 83.2250, 122.6765, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Assurance Arkansas cross-platform', '8967 Breanne Plains, Reillyview, Illinois, 22084-1779', '2018-10-24', 72.4675, -171.6764, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Uzbekistan Sum rich', '6534 Maurine Junctions, Mayraton, Nevada, 58262', '2018-10-25', 78.8649, 40.2511, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'local area network', '3538 Werner Unions, OKeefefurt, South Carolina, 59869-2457', '2018-10-25', 74.3299, 70.9862, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'sky blue panel Saudi Riyal', '85454 Schaefer Springs, West Ned, New Hampshire, 49433', '2018-10-24', 80.1705, -167.9609, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Internal heuristic IB', '32895 Isaiah Hill, Aylinfort, Utah, 13072-9168', '2018-10-25', -38.3021, -46.4837, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'invoice', '4108 Javier Street, Olsonland, Arizona, 45125', '2018-10-24', -89.8869, 130.6219, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'TCP Borders Cove', '83198 Conroy Walks, New Dahlia, California, 16922-7318', '2018-10-24', -80.5272, -104.7501, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Music', '254 Elva Ferry, Yundthaven, Nebraska, 64224', '2018-10-25', -6.2832, -127.4792, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Multi-layered Brand concept', '510 Sipes Isle, Port Carmela, Florida, 53038', '2018-10-25', 49.8547, -134.2807, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Latvian Lats Kina Poland', '5872 Blick Junctions, Port Zoe, Nebraska, 21206', '2018-10-24', -44.2923, 76.4762, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Investment Account', '803 Emory River, East Dagmarberg, Washington, 73245', '2018-10-25', -10.0849, -40.6501, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Corporate', '329 Dino Wall, North Stefanie, Washington, 03304-3426', '2018-10-25', -48.7599, 171.2823, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Designer Practical', '5814 Rutherford Trail, Alfonsoberg, Arizona, 99984-0207', '2018-10-25', -1.4141, 98.4661, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Implementation green Metrics', '13224 Giovani Corners, Hildamouth, Iowa, 12237', '2018-10-25', 40.3284, -112.8713, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Buckinghamshire Fantastic Soft Fish', '27473 Becker Light, West Destany, Wisconsin, 53681', '2018-10-24', 43.7387, -117.8143, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Rustic Intelligent Steel Chicken orchid', '8804 Goldner Mountain, OConnershire, Michigan, 69349-0983', '2018-10-25', 58.1367, -177.9419, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'structure navigate', '03736 Twila Parkway, Dallinfort, Kansas, 28868', '2018-10-25', -83.3653, -67.0446, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Sports Massachusetts', '429 Jeff Lodge, Port Donald, Kentucky, 65601-2699', '2018-10-24', -67.2287, -81.2536, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Practical', '55483 Friesen Bypass, North Joan, Virginia, 50502', '2018-10-24', 14.8485, 86.4929, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Tools leverage', '06002 Judge Park, Noraland, South Dakota, 54836-3319', '2018-10-24', -18.5852, -72.8890, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Wisconsin Frozen encompassing', '49250 Stamm Orchard, South Ryannchester, Wisconsin, 58696', '2018-10-24', 32.5158, -35.1405, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Ergonomic Wooden Shoes', '50459 Dibbert Shoals, Kadenbury, Kansas, 21469-5483', '2018-10-24', -2.3924, -101.1006, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', '24/365 extend', '42682 Rippin Turnpike, Mikaylafort, Missouri, 92440-4985', '2018-10-25', 78.1090, -66.8971, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Minnesota Madagascar payment', '642 Nadia Freeway, New Aglaebury, Kentucky, 35624', '2018-10-25', 57.6738, -28.8147, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Rustic Buckinghamshire', '42433 Kilback Meadow, Port Adolfo, New Hampshire, 46277-3876', '2018-10-25', 62.1837, 148.1802, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Personal Loan Account Vermont', '6390 Dooley Square, Port Isabelland, Maryland, 30690-4722', '2018-10-24', -19.9586, 177.2238, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'feed silver', '00508 Garland Orchard, Lake Salvadorstad, Ohio, 36832', '2018-10-24', 29.6210, 64.7610, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Accounts grey RSS', '607 Lueilwitz Parkway, North Josefa, Colorado, 04942-0980', '2018-10-24', -19.3450, 99.2413, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Club generate', '2306 Balistreri Drive, East Friedachester, Oklahoma, 48581', '2018-10-25', -21.8490, -70.1287, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Progressive internet solution panel', '0512 Pouros Bypass, East Joaquin, Kentucky, 08628-0436', '2018-10-24', -44.7064, -179.0751, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Danish Krone Beauty', '74144 Kyla Ports, North Darwinland, New Jersey, 72000', '2018-10-24', 33.7090, -1.1577, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Supervisor', '557 Maryam Streets, North Jenniefurt, South Dakota, 61297', '2018-10-25', -6.1258, -30.8122, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Hill calculating invoice', '041 Zemlak Meadows, Rockyburgh, Kentucky, 57253-5193', '2018-10-25', -22.9812, -142.0062, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Junctions Tanzanian Shilling Village', '258 Parker Plain, West Eloise, Colorado, 80804', '2018-10-25', 63.1140, 34.6724, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'North Korean Won auxiliary', '92780 Glennie Mews, North Estherstad, Rhode Island, 38384', '2018-10-24', -81.9493, -153.9620, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Realigned', '91719 Jayson Inlet, Bartellmouth, Louisiana, 79155-9546', '2018-10-24', 23.8834, 10.3925, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'portals', '5555 Stoltenberg Expressway, North Shannyhaven, Wisconsin, 49307-2044', '2018-10-25', 38.6536, 16.7080, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Ergonomic invoice', '229 Krajcik Plain, Port Sierra, New Mexico, 90598-1702', '2018-10-24', 30.5968, 96.4250, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Architect', '83611 Konopelski Light, East Elisa, Alabama, 67245', '2018-10-24', -53.1131, 36.4866, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Kuwait', '8271 Sigmund Points, Smithmouth, West Virginia, 27154', '2018-10-25', 22.1662, -21.1992, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Drive', '82679 Muller Shore, East Daishahaven, Hawaii, 26832', '2018-10-25', 1.0951, 14.8504, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Brunei Darussalam Toys Money Market Account', '9647 Joanny Divide, Wardside, Michigan, 09093', '2018-10-24', 22.8238, 57.6559, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Rubber', '40454 Gonzalo Fort, Pearlberg, Colorado, 08995', '2018-10-24', -54.1598, -44.3211, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'models Tasty', '4376 Powlowski Keys, Trudieshire, Colorado, 29318-2540', '2018-10-25', 46.3612, -58.1419, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'hacking', '078 Tania Squares, Yostfurt, Washington, 17535-1995', '2018-10-24', 86.3448, -139.2878, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'disintermediate Plastic Investment Account', '14910 Marianne Glens, Jevonmouth, Hawaii, 69596', '2018-10-25', -83.1294, -14.9957, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'archive Pennsylvania Personal Loan Account', '3790 Zackery Parks, Lake Franciscaborough, New York, 89404-8583', '2018-10-24', 48.3376, -22.8930, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'synthesizing', '5000 Miracle Ridge, Eichmannburgh, Connecticut, 70082-1838', '2018-10-24', -44.5260, 91.7313, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'analyzing Tuna', '4619 Miller Port, Lake Matildaberg, Louisiana, 38781-9783', '2018-10-24', 37.3897, -113.2877, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'pink Table', '898 Jillian Drive, Sheilaville, Vermont, 96156-5257', '2018-10-25', 82.2655, 37.6603, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'encryption models', '15589 Bergnaum Estates, Wilkinsonborough, Rhode Island, 11133-9493', '2018-10-25', -15.2209, 108.9995, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Credit Card Account', '50635 Friedrich Highway, Vivianstad, Illinois, 31543', '2018-10-25', 41.5389, -15.0710, 1, '{"11:00am":"11:00","5:30pm":"5:30","8:00pm":"8:00","10:30pm":"10:30"}');

INSERT INTO MovieTimes (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('SMTP', 'Checking Account', '7572 Hamill Fall, Kittyborough, New Hampshire, 14445-7480', '2018-10-24', -10.2489, 124.7270, 1, '{"5:30pm":"5:30","3:00pm":"3:00","12:30pm":"12:30","11:00pm":"11:00","7:30pm":"7:30"}');
