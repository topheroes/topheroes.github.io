var gulp = require("gulp"),
sass = require("gulp-sass"),
browserSync = require('browser-sync'),
fs = require("fs"),
uglify = require("gulp-uglify"),
obfuscate = require("gulp-obfuscate");


gulp.task("browserSync", function(){

	browserSync(
	{
		server: {
			baseDir: 'app'

		},
		host: "192.168.1.197"

	}

	);



});

gulp.task( "sass", function(){

	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));




});

gulp.task("watch", ["browserSync", "sass"], function(){

	gulp.watch('app/sass/**/*.sass',['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload );

}
);   



gulp.task("build",  function(){

var html = gulp.src("app/*.html").pipe(gulp.dest("dist"));
var js = gulp.src("app/js/**/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
var img = gulp.src("app/img/**/*.*").pipe(gulp.dest("dist/img"));
var css = gulp.src("app/css/**/*.css").pipe(gulp.dest("dist/css"));
var fonts = gulp.src("app/fonts/**/*.*").pipe(gulp.dest("dist/fonts"));
var libs = gulp.src("app/libs/**/*.*").pipe(gulp.dest("dist/libs"));



} );

gulp.task("uglify", function(){

	return gulp.src("app/js/*.js").
	pipe(uglify()).
	pipe(gulp.dest("app/js2"));


}   );

gulp.task('dirs', ['dirs2'], function () {
	fs.writeFileSync("app/index.html","");

});


gulp.task('dirs2', function () {
    
	

    return gulp.src('*.*', {read: false})
        .pipe(gulp.dest('app/css'))
        .pipe(gulp.dest('app/sass'))
        .pipe(gulp.dest('app/img'))
        .pipe(gulp.dest('app/js'))
        .pipe(gulp.dest('app/libs'))
        .pipe(gulp.dest('app/fonts'))
        .pipe(gulp.dest('dist'));

});


gulp.task("readDir", function(){



	var imgFiles = fs.readdirSync("C:/temp/files/");
	console.log(imgFiles[0]);
	fs.writeFileSync("C:/temp/1.txt",imgFiles.join("\"\,\""));

});



gulp.task("default", ["watch"]);

