var gulp = require('gulp');

var del = require('del');

var sass = require('gulp-ruby-sass');

var browserSync = require('browser-sync');

var fs = require('fs');

var path = require('path');

var merge = require('merge-stream');

var concat = require('gulp-concat');

var rename = require('gulp-rename');

var uglify = require('gulp-uglify');

var reload = browserSync.reload;
//  sass 路径配置

var sassInpath = 'app/scss/*.scss';  // 输入文件
var sassOutpath = 'app/css';  // 输出路径

//  del  路径配置

var delPath = ['app/tmp/*', 'app/dist/*', '!app/dist/a.html'];

//  uglify  压缩脚本路径配置

var scriptsPath = 'app/scripts';
var scriptfiles = 'scripts/**/*.js'


//  uglify  Function   

var getFolders = function(dir) {
	return fs.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
};

//  del   TASK
gulp.task('del', function(cb) {
	del(delPath, cb);
});

//  sass   TASK
gulp.task('sass', function() {
	return sass(sassInpath, {
		compass : true,   //  使用compass的选项
		style : 'expanded', //  css输出格式 compressed, compact, nested(default), expanded
		precision: 6  //  小数点后保留的小数位
	})
		.on('error', sass.logError)
		.pipe(gulp.dest(sassOutpath))
		.pipe(reload({ stream : true}));  //  传给reload
});


//  uglify  TASK  

gulp.task('scripts', function() {
	var folders = getFolders(scriptsPath);

	var tasks = folders.map(function(folder) {
		return gulp.src(path.join(scriptsPath, folder, '/*.js'))
				.pipe(concat(folder + '.js'))
				.pipe(gulp.dest(scriptsPath)) //  这里会输出一个以文件名命名的未被压缩过的js文件
				.pipe(uglify())
				.pipe(rename(folder + '.min.js'))
				.pipe(gulp.dest(scriptsPath)); // 这里会输出一个以文件夹名+min.js为文件名的压缩过的js文件
	});

	return merge(tasks);
});

//   browser-sync reload TASK
gulp.task('serve', ['sass'], function() {
	browserSync({
		server : {
			baseDir : 'app'
		}
	});

	gulp.watch(sassInpath, ['sass']);
	gulp.watch(['*.html', scriptfiles], {cwd : 'app'}, reload); // app 为当前目录，注意这里  { cwd : 'app'} 的用法是在特定的匹配中，指定新的当前工作路径
	gulp.watch(path.join(scriptsPath, '**/*.js'), ['scripts']);
});