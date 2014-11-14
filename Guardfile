# compile SASS
guard 'sass', :input => 'assets/stylesheets', :compass => true

# compile COFFEE
# guard 'coffeescript', :input => 'assets/javascripts'

# Use jammit to concat and minify assets
guard :jammit, :config_path => 'assets.yml', :package_on_start => true, :output_folder => 'assets/' do
  watch(%r{^assets/javascripts/(.*)\.js$})
  watch(%r{^assets/stylesheets/(.*)\.css$})
end
