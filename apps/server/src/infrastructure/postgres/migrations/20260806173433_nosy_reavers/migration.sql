CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"username" varchar(20) NOT NULL UNIQUE,
	"email" varchar(255) UNIQUE,
	"password_hash" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "game_sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"status" varchar(20) DEFAULT 'waiting' NOT NULL,
	"max_players" integer DEFAULT 50 NOT NULL,
	"started_at" timestamp,
	"ended_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "player_stats" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" uuid NOT NULL,
	"games_played" integer DEFAULT 0 NOT NULL,
	"games_won" integer DEFAULT 0 NOT NULL,
	"highest_mass" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "game_players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"game_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"final_mass" integer DEFAULT 0,
	"score" integer DEFAULT 0,
	"alive" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "game_results" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"game_id" uuid NOT NULL,
	"winner_id" uuid,
	"score" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leaderboard" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" uuid NOT NULL,
	"highest_score" integer DEFAULT 0 NOT NULL,
	"games_won" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "player_stats" ADD CONSTRAINT "player_stats_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");--> statement-breakpoint
ALTER TABLE "game_players" ADD CONSTRAINT "game_players_game_id_game_sessions_id_fkey" FOREIGN KEY ("game_id") REFERENCES "game_sessions"("id");--> statement-breakpoint
ALTER TABLE "game_players" ADD CONSTRAINT "game_players_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");--> statement-breakpoint
ALTER TABLE "game_results" ADD CONSTRAINT "game_results_game_id_game_sessions_id_fkey" FOREIGN KEY ("game_id") REFERENCES "game_sessions"("id");--> statement-breakpoint
ALTER TABLE "game_results" ADD CONSTRAINT "game_results_winner_id_users_id_fkey" FOREIGN KEY ("winner_id") REFERENCES "users"("id");--> statement-breakpoint
ALTER TABLE "leaderboard" ADD CONSTRAINT "leaderboard_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");