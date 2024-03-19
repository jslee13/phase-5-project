from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = "users_table"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String)

    posts = db.relationship("Post", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")

    serialize_rules = ("-posts", "-comments")

class Group(db.Model, SerializerMixin):
    __tablename__ = "groups_table"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    img_url = db.Column(db.String)
    debut_date = db.Column(db.String)
    fandom_name = db.Column(db.String)
    youtube = db.Column(db.String)
    instagram = db.Column(db.String)
    twitter = db.Column(db.String)
    tiktok = db.Column(db.String)
    info = db.Column(db.String)

    idols = db.relationship("Idol", back_populates="group")
    forums = db.relationship("Forum", back_populates="group")

    serialize_rules = ("-idols.group", "-forums.group")

class Idol(db.Model, SerializerMixin):
    __tablename__ = "idols_table"

    id = db.Column(db.Integer, primary_key=True)
    stage_name = db.Column(db.String)
    birth_name = db.Column(db.String)
    img_url = db.Column(db.String)
    birthday = db.Column(db.String)
    height = db.Column(db.String)
    weight = db.Column(db.String)
    blood_type = db.Column(db.String)
    mbti = db.Column(db.String)
    nationality = db.Column(db.String)
    instagram = db.Column(db.String)
    facts = db.Column(db.String)
    group_id = db.Column(db.String, db.ForeignKey("groups_table.id"))

    group = db.relationship("Group", back_populates="idols")
    idol_positions = db.relationship("IdolPosition", back_populates="idol")
    positions = association_proxy("idol_positions", "position")

    serialize_rules = ("-group", "-idol_positions", "-positions.idols", "-positions.idol_positions")

class Position(db.Model, SerializerMixin):
    __tablename__= "positions_table"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Integer, unique=True)

    idol_positions = db.relationship("IdolPosition", back_populates="position")
    idols = association_proxy("idol_positions", "idol")

    serialize_rules = ("-idol_positions.position", "-idols")

class IdolPosition(db.Model, SerializerMixin):
    __tablename__ = "idol_positions_table"

    id = db.Column(db.Integer, primary_key=True)
    idol_id = db.Column(db.Integer, db.ForeignKey("idols_table.id"))
    position_id = db.Column(db.Integer, db.ForeignKey("positions_table.id"))

    idol = db.relationship("Idol", back_populates="idol_positions")
    position = db.relationship("Position", back_populates="idol_positions")

    serialize_rules = ("-idol.idol_positions", "-position.idol_postions")

class Forum(db.Model, SerializerMixin):
    __tablename__ = "forums_table"

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey("groups_table.id"))

    posts = db.relationship("Post", back_populates="forum")
    group = db.relationship("Group", back_populates="forums")

    serialize_rules = ("-posts.forum", "-group")

class Post(db.Model, SerializerMixin):
    __tablename__ = "posts_table"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.Text)
    forum_id = db.Column(db.Integer, db.ForeignKey("forums_table.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users_table.id"))

    user = db.relationship("User", back_populates="posts")
    forum = db.relationship("Forum", back_populates="posts")
    comments = db.relationship("Comment", back_populates="post")

    serialize_rules = ("-user.posts", "-forum", "-comments.post")

class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments_table"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String)
    post_id = db.Column(db.Integer, db.ForeignKey("posts_table.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users_table.id"))

    user = db.relationship("User", back_populates="comments")
    post = db.relationship("Post", back_populates="comments")

    serialize_rules = ("-user.comments", "-post")
