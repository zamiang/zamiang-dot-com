# compile SASS
guard 'sass', :input => 'assets/stylesheets', :compass => true
guard :concat, type: "css", files: %w(normalize about posts projects publications app pygment_trac responsive), input_dir: "assets/stylesheets", output: "application"

guard 'process', :name => 'Minify CSS', :command => 'juicer merge application.css --force -c none' do
  watch %r{application\.css}
end

# compile COFFEE
# guard 'coffeescript', :input => 'assets/javascripts'
guard :concat, type: "js", files: %w(app), input_dir: "assets/javascripts", output: "application"
guard 'process', :name => 'Minify application javascript', :command => 'juicer merge application.js --force -s' do
  watch %r{application\.js}
end

