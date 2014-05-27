# compile SASS
guard 'sass', :input => '_assets/stylesheets', :compass => true
guard :concat, type: "css", files: %w(normalize about photos posts projects publications app pygment_trac responsive), input_dir: "_assets/stylesheets", output: "application"

guard 'process', :name => 'Minify CSS', :command => 'juicer merge application.css --force -c none' do
  watch %r{application\.css}
end

# compile COFFEE
# guard 'coffeescript', :input => '_assets/javascripts'
guard :concat, type: "js", files: %w(app), input_dir: "_assets/javascripts", output: "application"
guard 'process', :name => 'Minify application javascript', :command => 'juicer merge application.js --force -s' do
  watch %r{application\.js}
end
