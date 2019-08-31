import babelPlugin  from '../../src/babel-loader.js';
import preset from '@babel/preset-env';

window.babelPlugin=babelPlugin;

let demoCode = window.demoCode = `
	const Sprite = Easycanvas.Sprite;
	const Image = Easycanvas.class.image;
	const Text = Easycanvas.class.text;

	var $app = new Easycanvas.Painter();
	$app.register(document.getElementById('app'));
	$app.start();

	//     var $fpsBox = document.getElementsByClassName('fps')[0];
	//     $app.fpsHandler = function (fps) {
	//         if ($app.$perf && $app.$perf.preprocessTimeSpend) {
	//             $fpsBox.innerText = fps + 'fps,' + $app.$perf.preprocessTimeSpend + ',' + $app.$perf.paintTimeSpend;
	//         } else {
	//             $fpsBox.innerText = fps;
	//         }
	//     };

    const $View = <View />;

    window.xxx = $app.add(
        <View
            style={{
                left: 100,
                top: 100,
            }}>

            { $View }

            <Text
                style={{
                    left: 100,
                    top: 100,
                    color: '#0F0',
                    fontSize: 24,
                }}
            >
                { () => '1' }
            </Text>
        </View>
    );
	window.Easycanvas.ImgLoader('https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png', function (img) {
	    let content = {
	        img: img
	    };

	    window.Sprite_JSX_1 = $app.add(
	        <Sprite
	            name='root'
	            content={content}
	            style={{
	                width: 40, height: 20,
	                cutLeft: 0, cutTop: 0,
	                left: Easycanvas.Transition.ease(111, 422, 5500).loop(),
	                top: 80,
	            }}
	            events={{
	                eIndex: 12,
	                mousemove: function (e) {
	                    console.log(this, e);
	                },
	            }}
	        >
	            <Sprite
	                name='c1'
	                content={content}
	                style={{
	                    width: 20, height: 20,
	                    cutLeft: 0, cutTop: 0,
	                    left: Easycanvas.Transition.ease(111, 422, 5500).loop(),
	                    top: 80,
	                }}
	            />
	        </Sprite>
	    );

	    window.Sprite_JSX_2 = $app.add({
	        name: 'root',
	        content: {
	            img: img,
	        },
	        style: {
	            width: 40, height: 20,
	            cutLeft: 0, cutTop: 0,
	            left: Easycanvas.Transition.ease(111, 422, 6500).loop(),
	            top: 160,
	            opacity: 0.2,
	            rotate: 20,
	            locate: 'center',
	            zIndex: 1,
	        },
	        events: {
	            eIndex: 2,
	            mousemove: function (e) {
	                console.log(this, e);
	            },
	        },
	    });

	    let top = 100;
	    setInterval(() => {
	        top++;
	    }, 100);

	    window.Sprite_JSX_3 = $app.add(
	        <Image
	            src='https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png'
	            style={{
	                left: Easycanvas.Transition.ease(111, 222, 3500).loop(),
	                top: 240,
	                width: 40, height: 20,
	                cutLeft: 0, cutTop: 0,
	            }}
	            events={{
	                eIndex: 12,
	                mousemove: function (e) {
	                    console.log(this, e);
	                },
	            }}
	        >
	            <Image
	                src='https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png'
	                style={{
	                    left: Easycanvas.Transition.ease(111, 222, 3500).loop(),
	                    top: 40,
	                    width: 40, height: 20,
	                    cutLeft: 0, cutTop: 0,
	                }}
	                events={{
	                    eIndex: 12,
	                    mousemove: function (e) {
	                        console.log(this, e);
	                    },
	                }}
	            />
	            <Text
	                text='这里是一段多行文本abcdefg1234567！？：.,?'
	                style={{
	                    left: Easycanvas.Transition.ease(111, 222, 3500).loop(),
	                    top: 40,
	                    width: 240,
	                    color: '#F00',
	                    locate: 'lt',
	                }}
	            />
	            <Text
	                style={{
	                    left: Easycanvas.Transition.ease(111, 222, 3500).loop(),
	                    top: function () {return this.style.width},
	                    width: 240,
	                    color: '#F00',
	                    locate: 'lt',
	                }}
	            >
	                {'这里是一段多行文本abcdefg1234567！？：.,?'}
	            </Text>
	        </Image>
	    );
	});

	console.log('source');
`;

// demoCode = 
// console.log(demoCode);

const result = window.Babel.transform(demoCode, {
    presets: [preset],
    plugins: [
        babelPlugin
        // path.resolve('./src/babel-loader.js'),
        // path.resolve('./build/babel-loader.umd.prod.js'),
    ]
});
console.log(result.code);
