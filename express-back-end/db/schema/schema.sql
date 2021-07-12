DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS choices CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  goals INTEGER,
  assists INTEGER,
  game_winning_goals INTEGER,
  nhl_team VARCHAR(255) NOT NULL,
  is_guardian BOOLEAN NOT NULL,
  fpts_round1 INTEGER,
  fpts_round2 INTEGER,
  fpts_round3 INTEGER,
  fpts_total INTEGER,
  player_id_api INTEGER,
);
 
CREATE TABLE players (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  goals INTEGER,
  assists INTEGER,
  game_winning_goals INTEGER,
  nhl_team VARCHAR(255) NOT NULL,
  team_name VARCHAR(255) NOT NULL,
  is_guardian BOOLEAN NOT NULL,
  fpts_round1 INTEGER,
  fpts_round2 INTEGER,
  fpts_round3 INTEGER,
  fpts_total INTEGER,
  player_id_api VARCHAR(255) NOT NULL,
);
/*
CREATE TABLE rooms (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  description TEXT,
  latitude DECIMAL,
  longitude DECIMAL,
  room_size INTEGER,
  start_date DATE,
  end_date DATE,
  price INTEGER NOT NULL,
  is_pet_friendly BOOLEAN DEFAULT false,
  has_heating BOOLEAN DEFAULT false,
  has_parking BOOLEAN DEFAULT false,
  has_private_bath BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT false,
  city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  message TEXT,
  sentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE DEFAULT NULL,
  applicant_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT NULL
);


CREATE TABLE interests (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255)
);

CREATE TABLE users_interests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE
); */