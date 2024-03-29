import json
from app import app
from model import db, User, Group, Idol, Position, IdolPosition, Forum, Post, Comment
from random import choice as rc

f = open('db.json')
data = json.load(f)
json_groups = data['groups']
json_idols = data['idols']
json_positions = data['positions']
json_idol_positions = data['idol-positions']
json_forums = data['forums']

if __name__ == '__main__':
    with app.app_context():
        print("Clearing db")
        User.query.delete()
        Group.query.delete()
        Idol.query.delete()
        Position.query.delete()
        IdolPosition.query.delete()
        Forum.query.delete()
        Post.query.delete()
        Comment.query.delete()

        print("Starting seed...")


        def create_groups():

            groups = [Group(name=group['name'], 
            img_url=group['img_url'],
            debut_date=group['debut_date'],
            fandom_name=group['fandom_name'],
            youtube=group['youtube'],
            instagram=group['instagram'],
            twitter=group['twitter'],
            tiktok=group['tiktok'],
            info=group['info']) 
            for group in json_groups]
        
            db.session.add_all(groups)
            db.session.commit()

            return groups
        
        groups = create_groups()
        print("Seeding Groups")

        
        def create_idols():
            idols = [Idol(stage_name=idol['stage_name'], 
            birth_name=idol['birth_name'],
            img_url=idol['img_url'],
            birthday=idol['birthday'],
            height=idol['height'],
            weight=idol['weight'],
            blood_type=idol['blood_type'],
            mbti=idol['mbti'],
            nationality=idol['nationality'],
            instagram=idol['instagram'],
            facts=idol['facts'],
            group_id=idol['group_id']) 
            for idol in json_idols]

            db.session.add_all(idols)
            db.session.commit()

            return idols

        idols = create_idols()
        print("Seeding Idols")

        
        def create_positions():
            positions = [Position(name=position['name']) for position in json_positions]

            db.session.add_all(positions)
            db.session.commit()

            return positions

        positions = create_positions()
        print("Seeding Positions")

        def create_idol_positions():
            idol_positions = [IdolPosition(idol_id=idol_position['idol_id'], position_id=idol_position['position_id']) for idol_position in json_idol_positions]

            db.session.add_all(idol_positions)
            db.session.commit()

            return idol_positions
 
        idol_positions = create_idol_positions()
        print("Seeding Idol Positions")

        def create_forums():
            forums = [Forum(group_id=forum['group_id']) for forum in json_forums]
        
            db.session.add_all(forums)
            db.session.commit()
        
        forums = create_forums()
        print("Seeding Forums")


        db.session.commit()

        print("Seeding Done")

f.close()