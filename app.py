from flask import Flask, request, render_template as render_template, session, redirect, url_for
from flask_babel import Babel

# Set up App
app = Flask(__name__, 
            static_url_path = '', 
            static_folder = 'static',
            template_folder = 'templates')

# Flask App configuration
app.config['TEMPLATES_AUTO_RELOAD'] = True

# Root: main.html
@app.route('/')
def home():
    return render_template('base.html')

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.run(debug = False, host = '127.0.0.1')