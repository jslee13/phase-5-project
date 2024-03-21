from flask import Flask, request, session
from model import User, Group, Idol, Position, IdolPosition, Forum, Post, Comment
from flask_bcrypt import Bcrypt
from config import create_app, db

app = create_app()
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return '<h1>Phase 5 Project/Product</h1>'

@app.get('/api/check_session')
def check_session():
    user_id = session.get('user_id')
    user = User.query.where(User.id == user_id).first()
    if user:
        return user.to_dict(), 200
    else:
        return {}, 200
    
@app.post('/api/login')
def login():
    data = request.json
    username = data['username']
    password = data['password']
    user = User.query.where(User.username == username).first()
    if user and bcrypt.check_password_hash(user.password, password):
        session['user_id'] = user.id
        return user.to_dict(), 201
    else:
        return {'error': 'Invalid username or password'}, 401

@app.delete('/api/logout')
def logout():
    session.pop('user_id')
    return {}, 204


@app.get('/users')
def get_users():
    all_users = User.query.all()
    return [ user.to_dict() for user in all_users], 200

@app.get('/api/users/<int:id>')
def get_users_by_id(id):
    found_users = User.query.where(User.id ==id).first()
    if found_users:
        return found_users.to_dict(), 200
    else:
        return{'error': 'User not found'}
    
@app.post('/api/users')
def add_user():
    data = request.json

    try:
        new_user = User(
            username=data.get('username'))
        new_user.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        db.session.add(new_user)
        db.session.commit()
        return new_user.to_dict(), 201
    
    except ValueError as error:
        return {'error': f'{error}'}, 406
    except:
        return {'error': 'Invalid data'}, 422

@app.get('/groups')
def get_groups():
    all_groups = Group.query.all()
    return [group.to_dict() for group in all_groups], 200

@app.get('/groups/<int:id>')
def get_group_by_id(id):
    found_group = Group.query.where(Group.id == id).first()
    if found_group:
        return found_group.to_dict(), 200
    else:
        return {'error': 'Group not found'}

@app.get('/forum')
def get_forums():
    all_forums = Forum.query.all()
    return [forum.to_dict() for forum in all_forums], 200

@app.get('/groups/<int:id>/forum')
def get_forum_by_id(id):
    found_forum = Forum.query.where(Forum.group_id == id).first()
    if found_forum:
        return found_forum.to_dict(), 200
    else:
        return {'error': 'Forum not found'}
    
@app.get('/posts/<int:id>')
def get_post_by_id(id):
    found_post = Post.query.where(Post.id == id).first()
    if found_post:
        return found_post.to_dict(), 200
    else:
        return {'error': 'Post not found'}
    
@app.post('/api/posts')
def post_post():
    data = request.json

    try:
        new_post = Post(title=data.get("title"), body=data.get("body"), forum_id=data.get("forum_id"), user_id=data.get("user_id"))
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict(), 200
    
    except ValueError as error:
        return {'error': f'{error}'}, 422
    
    except:
        return {'error': 'Post Validation errors'}, 422
    
@app.get('/posts/<int:id>/comments')
def get_comment_by_id(id):
    found_comment = Comment.query.where(Comment.post_id == id).first()
    if found_comment:
        return found_comment.to_dict(), 200
    else:
        return {'error': 'Comment not found'}

@app.post('/api/comments')
def post_comments():
    data = request.json

    try:
        new_comment = Comment(message=data.get("message"), post_id=data.get("post_id"), user_id=data.get("user_id"))
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict(), 200
    
    except ValueError as error:
        return {'error': f'{error}'}, 422
    
    except:
        return {'error': 'Post Validation errors'}, 422
    

if __name__ == '__main__':
    app.run(port=5555, debug=True)
