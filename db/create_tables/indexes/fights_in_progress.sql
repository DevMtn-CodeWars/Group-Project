CREATE UNIQUE INDEX unq_fights_in_progress_cat_id_cat_fight_id on fights_in_progress (cat_id, cat_fight_id) where completed = false