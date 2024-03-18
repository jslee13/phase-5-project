from app import app
from model import db, User, Group, Idol, Position, IdolPosition, Forum, Post, Comment
from random import choice as rc

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

      
        users = [
            User(username="Kpooper", password="Secret"),
            User(username="DefinatelyNotKorean", password="Secret")
        ]

        db.session.add_all(users)
        print("Seeding Users")

        groups = [
            Group(name="Something", 
                    img_url="https://kprofiles.com/wp-content/uploads/2020/10/aespa-2-900x600.jpg", 
                    debut_date="June 1, 2025", 
                    fandom_name="Nothing", 
                    youtube="something", 
                    instagram="something", 
                    twitter="something x", 
                    tiktok="something", 
                    info="They did something"),
            Group(name="Somethingelse", 
                    img_url="https://kprofiles.com/wp-content/uploads/2020/10/aespa-2-900x600.jpg", 
                    debut_date="July 1, 2100", 
                    fandom_name="Nothingelse", 
                    youtube="somethingelse", 
                    instagram="somethingelse", 
                    twitter="somethingelse x", 
                    tiktok="somethingelse", 
                    info="They did somethingelse"),]
        
        db.session.add_all(groups)
        print("Seeding Groups")

        
        idols = [
            Idol(stage_name="That", 
                    birth_name="Then", 
                    img_url="", 
                    birthday="March 14 2000", 
                    height="5'3", 
                    weight="110", 
                    blood_type="O", 
                    mbti="ISFP", 
                    nationality="unknown", 
                    instagram="Thow", 
                    facts="Able to jump 2 inches", 
                    group_id= 1),

            Idol(stage_name="Hi", 
                    birth_name="Bye", 
                    img_url="", 
                    birthday="Decemeber 31 1999", 
                    height="5'2", 
                    weight="108", 
                    blood_type="B", 
                    mbti="ESFJ", 
                    nationality="American", 
                    instagram="mid", 
                    facts="Able to move 2 inches", 
                    group_id= 1),

            Idol(stage_name="Who", 
                    birth_name="What", 
                    img_url="", 
                    birthday="August 10 2002", 
                    height="5'5", 
                    weight="112", 
                    blood_type="AB", 
                    mbti="INSP", 
                    nationality="Japanese", 
                    instagram="Where", 
                    facts="Able to think about 2 inches", 
                    group_id= 1),

            Idol(stage_name="Mike", 
                    birth_name="Tim", 
                    img_url="", 
                    birthday="April 20 2000", 
                    height="5'8", 
                    weight="125", 
                    blood_type="B", 
                    mbti="INFP", 
                    nationality="French", 
                    instagram="Ty", 
                    facts="Able to see 2 inches", 
                    group_id= 2),

            Idol(stage_name="Billy", 
                    birth_name="Bob", 
                    img_url="", 
                    birthday="November 27 1998", 
                    height="5'9", 
                    weight="118", 
                    blood_type="A", 
                    mbti="ESFJ", 
                    nationality="American", 
                    instagram="Jones", 
                    facts="Able to drive 2 inches", 
                    group_id= 2)
        ]

        db.session.add_all(idols)
        print("Seeding Idols")

        
        positions = [
            Position(name="Singer"),
            Position(name="Dancer"),
            Position(name="Rapper")
        ]

        db.session.add_all(positions)
        print("Seeding Positions")


        idol_positions = []
        for idol in idols:
            idol_positions.append(
                IdolPosition(idol=idol, position=rc(positions))
            )
        db.session.add_all(idol_positions)
        print("Seeding Idol Positions")


        forum = [
            Forum(group_id = 1),
            Forum(group_id = 2)
        ]
        db.session.add_all(forum)
        print("Seeding Forums")


        post = [
            Post(title="This group is Something Special", body="I do not know what is going on, but they are something", forum_id=1, user_id=2),
            Post(title="Where am I?", body="Just saying hi", forum_id=1, user_id=1),
            Post(title="Something else going on here", body="I am confused.....anyone else?", forum_id=2, user_id=1)
        ]
        db.session.add_all(post)
        print("Seeding Posts")

        comment = [
            Comment(message="For sure!", post_id=1, user_id=1),
            Comment(message="Cool story bro!", post_id=1, user_id=2),
            Comment(message="Not me lol", post_id=2, user_id=2)
        ]
        db.session.add_all(comment)
        db.session.commit()

        print("Seeding Done")