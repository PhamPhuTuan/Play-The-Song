let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let bottom_play = document.querySelector('#bottom_play');
let next = document.querySelector('#next');

let title = document.querySelector('.title');
let lyric = document.querySelector('.content_lyric');
let title2 = document.querySelector('.title_of_lyric');

let recent_volume = document.querySelector('#volume');
let recent_myRangeVolume = document.querySelector('#myRangeVolume');
let volume_show = document.querySelector('#volume_show');

let slider = document.querySelector('#duration_slider');
let bottom_slider = document.querySelector('#myRange');

let track_image = document.querySelector('#track_image');
let bottom_img = document.querySelector('#bottom_img');

let bottom_name = document.querySelector('#bottom_name');
let bottom_auth = document.querySelector('#bottom_auth');

let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let lyricclass = document.querySelector('.lyric');
let main = document.querySelector('.main--1');
let navigation = document.querySelector('.navigation-bar');
let play_the_song_do = document.querySelector('.play_the_song');

let index_no = 0;
let Playing_song = false;
let timer;
let autoplay = 0;
//create a audio Element
let track = document.createElement('audio');

//All songs list
let All_song = [{
        name: "Something Just Like This - Don Diablo Remix",
        path: "../music/song1.mp3",
        img: "../Images/img/img1.jpg",
        singer: "The Chainsmokers, Coldplay, Don Diablo",
        lyric: `I've been reading books of old<br>The legends, and the myths<br>Achilles and his gold <br>Hercules and his gifts <br>Spiderman's control <br>And Batman with his fists <br>And clearly I don't see myself upon that list <br>But she said, where'd you wanna go?<br>How much you wanna risk?<br>I'm not looking for somebody<br>With some superhuman gifts<br>Some superhero<br>Some fairytale bliss<br>Just something I can turn to<br>Somebody I can kiss<br>I want something just like this<br>Doo-doo, doo-doo<br>Doo-doo-doo<br>Doo-doo, doo-doo<br>Oh, I want something just like this<br>Doo-doo, doo-doo<br>Doo-doo-doo<br>Doo-doo, doo-doo<br>Oh, I want something just like this<br>I want something just like this<br>I've been reading books of old<br>The legends, and the myths<br>The testaments they told<br>The moon, and its eclipse<br>And Superman unrolls<br>A suit before he lifts<br>But I'm not the kind of person that it fits<br>She said, where'd you wanna go?<br>How much you wanna risk?<br>I'm not looking for somebody<br>With some superhuman gifts<br>Some superhero<br>Some fairytale bliss<br>Just something I can turn to<br>Somebody I can miss<br>I want something just like this<br>I want something just like this<br>Oh, I want something just like this<br>Doo-doo, doo-doo<br>Doo-doo-doo<br>Doo-doo, doo-doo<br>Oh, I want something just like this<br>Doo-doo, doo-doo<br>Doo-doo-doo<br>Doo-doo, doo-doo<br>Where'd you wanna go?<br>How much you wanna risk?<br>I'm not looking for somebody<br>With some superhuman gifts<br>Some superhero<br>Some fairytale bliss<br>Just something I can turn to<br>Somebody I can kiss<br>I want something just like this<br>Oh, I want something just like this<br>Oh, I want something just like this<br>Oh, I want something just like this<br>`
    },
    {
        name: "On My Mind",
        path: "../music/song2.mp3",
        img: "../Images/img/img2.jpg",
        singer: "Don Diablo",
        lyric: `Oh<br>Oh oh oh, hey<br>It's a little dirty how the whole thing started<br>I don't even really know what you intended<br>Thought that you were cute and you could make me jealous<br>Poured it down, so I poured it down<br>Next thing that I know I'm in the hotel with you<br>You were talking deep like it was mad love to you<br>You wanted my heart but I just liked your tattoos<br>Poured it down, so I poured it down<br>And now I don't understand it<br>You don't mess with love, you mess with the truth<br>And I know I shouldn't say it<br>But my heart don't understand<br>Why I got you on my mind<br>Why I got you on my mind<br>Why I got you on my mind<br>Why I got you on my mind (but my heart don't understand)<br>Why I got you on my mind<br>Why I got you on my mind<br>Why I got you on my mind<br>Why I got you on my mind, uh huh, uh huh, uh huh, uh huh<br>I always hear, always hear them talking<br>Talking 'bout a girl, 'bout a girl with my name<br>Saying that I hurt you but I still don't get it<br>You didn't love me, no, not really<br>Wait, I could have really liked you<br>I'll bet, I'll bet that's why I keep on thinking 'bout you<br>It's a shame (shame), you said I was good<br>So I poured it down, so I poured it down<br>And now I don't understand it<br>You don't mess with love, you mess with the truth<br>And I know I shouldn't say it<br>But my heart don't understand<br>Why I got you on my mind<br>Why I got you on my mind<br>Why I got you on my mind<br>Why I got you on my mind (but my heart don't understand)<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind (you think you know somebody<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind<br>You got yourself in a dangerous zone<br>'Cause we both have the fear, fear of being alone<br>And I still don't understand it<br>You don't mess with love, you mess with the truth<br>And my heart don't understand it, understand it, understand it<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind (but my heart don't understand)<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind (you think you know somebody)<br>Why I got you on my mind (but my heart don't understand)<br>Why I got you on my mind (you think you know somebody)<br>You think you know somebody (why I got you on my mind)<br>You think you know somebody<br>Ah ah ah ah oh ah`,
    },
    {
        name: "Save A Little Love",
        path: "../music/song3.mp3",
        img: "../Images/img/img3.jpg",
        singer: "Don Diablo",
        lyric: `Darlin 'I see, it's wearing you down<br>You got so much to do,but I just want you around <br> Darlin ' I see, the look in your eyes<br>You're too tired for love,after working all night <br> Work all week(work all week) <br> And chase money(chase money) <br> Can 't you see? (can't you see ? ) <br> Real love is for free <br> Real love is for free <br> C 'mon, 1, 2, 3<br>Won't you save a little love for me ? <br> If you save a little love for me <br> I can show you how love can be <br> Oh, wait and see <br> Won 't you save a little love for me?<br>If you save a little love for me<br>I can show you how love can be<br>C'mon, 1, 2, 3 <br> Won 't you save a little love for me?<br>If you save a little love for me<br>I can show you how love can be<br>Oh, wait and see<br>Won't you save a little love for me ? <br> If you save a little love for me <br> I can show you how love can be <br> If all that you want is some appreciation <br> You got more than enough, you ain 't the dollars you're makin '<br>If loving can be some kind of payment<br>We get more than we need, when we're billionaire 's, baby<br>Work all week (work all week)<br>And chase money (chase money)<br>Can't you see ? (can 't you see?)<br>Real love is for free<br>Real love is for free<br>C'mon, 1, 2, 3 <br> Won 't you save a little love for me?<br>If you save a little love for me<br>I can show you how love can be<br>Oh, wait and see<br>Won't you save a little love for me ? <br> If you save a little love for me <br> I can show you how love can be <br> C 'mon, 1, 2, 3<br>Won't you save a little love for me ? <br> If you save a little love for me <br> I can show you how love can be <br> Oh, wait and see <br> Won 't you save a little love for me?<br>If you save a little love for me<br>I can show you how love can be`
    },
    {
        name: "Children Of A Miracle",
        path: "../music/song4.mp3",
        img: "../Images/img/img4.jpg",
        singer: "Don Diablo & Marnik",
        lyric: `Miracle, miracle, miracle<br>Miracle, miracle, miracle, miracle<br>Sea of flames, taking hold<br>They're throwing oil on burning water<br>They raise the tides<br>We raise the boats<br>No, we won't be going under<br>We are the children of a miracle<br>Running with the wolves through the valley tonight<br>We are the children of a miracle, miracle<br>We're shadows in the moonlight<br>Empires will fall, will fall, will fall before midnight<br>We are the children of a miracle, miracle<br>3, 2, 1<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle<br>We are the children of a miracle<br>Miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>Bang the drums, I'll bring it out<br>And there's no one left to hear them<br>Take me home, yeah take me home<br>The only place that I believe in<br>We are the children of a miracle<br>Running with the wolves through the valley tonight<br>We are the children of a miracle, miracle<br>We're shadows in the moonlight<br>Empires will fall, will fall, will fall before midnight<br>We are the children of a miracle, miracle<br>And we can fly with the cannonballs<br>We can fly between the lines<br>We are the children of a miracle, miracle<br>3, 2, 1<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle<br>We are the children of a miracle<br>Miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>Miracle, miracle, miracle<br>We are the children of a miracle<br>Running with the wolves through the valley tonight<br>We are the children of a miracle, miracle<br>Miracle, miracle, miracle, miracle<br>Miracle, miracle, miracle, miracle<br>Miracle, miracle, miracle, miracle<br>Miracle, miracle`
    },
    {
        name: "Ocean Drive",
        path: "../music/song5.mp3",
        img: "../Images/img/img5.jpg",
        singer: "Duke Dumont",
        lyric: `We're riding down the boulevard<br>We're riding through the dark night<br>With half the tank and empty heart<br>Pretending we're in love but it's never enough<br>As the sirens fill the lonely air<br>Oh, how did we get here, now, now, now, babe?<br>We see a storm is closing in<br>Pretending we ain't scared<br>Don't say a word while we dance with the devil<br>You brought a fire to a world so cold<br>We're out of time on the highway to never<br>Hold on, hold on, hold on, hold on<br>Don't say a word while we dance with the devil<br>You brought a fire to a world so cold<br>We're out of time on the highway to never<br>Hold on, hold on, hold on, hold on<br>We're running all the red lights down<br>No way that we can stop, nah, nah<br>A quarter tank and almost gone<br>Pretending we're in love but it's never enough, nah<br>I wish we could take it back in time<br>Before we crossed the line, now, now, now, babe<br>We see a storm is closing in<br>I reach out for your hand<br>Don't say a word while we dance with the devil<br>You brought a fire to a world so cold<br>We're out of time on the highway to never<br>Hold on, hold on, hold on, hold on, hold on<br>Don't say a word while we dance with the devil<br>You brought a fire to a world so cold<br>We're out of time on the highway to never<br>Hold on, hold on, hold on, hold on, hold on<br>Hold on, oh, yeah, yeah, oh<br>Hold on<br>Don't say a word while we dance with the devil<br>You brought a fire to a world so cold<br>We're out of time on the highway to never<br>Hold on, hold on, hold on, hold on, hold on<br>Don't say a word while we dance with the devil<br>You brought a fire to a world so cold<br>We're out of time on the highway to never<br>Hold on, hold on, hold on, hold on`
    },
    {
        name: "Xa Kỷ Niệm",
        path: "../music/song6.mp3",
        img: "../Images/img/img6.jpg",
        singer: "Phan Mạnh Quỳnh",
        lyric: `Bàn tay ấy giờ nồng nàn trong đôi tay người khác<br>Hình như gió lạnh vừa thổi qua tay anh<br>Lặng lẽ ngắm ngọn đèn đường, bay bay màn sương đêm<br>Anh nhớ em, anh khóc trong lòng<br>Tình yêu hình như mong manh, vài lỗi lầm nhưng ai hay<br>Mọi ngọt ngào đã theo đó vỡ tan tành<br>Giờ anh là đêm cô đơn, chờ mong ngày mới trong đêm<br>Để những nỗi niềm trong anh dần vơi<br>Rời xa nhé kỷ niệm buồn, rời những rung động bồi hồi<br>Gạt cay đắng anh tìm một lối đi không còn em<br>Chợt trong giấc mộng ùa về, hình dáng ấy chẳng nhạt nhòa<br>Để anh biết sẽ chẳng bao giờ quên người anh yêu, anh nhớ em<br>Tìm về lối hẹn ngày đầu, nơi bao la biển sóng<br>Ngồi trên cát rồi một mình viết tên em<br>Thời gian cứ vội vàng chạy, nhưng ký ức chưa phai<br>Theo bước chân anh đến vô cùng<br>Ngày anh và em bên nhau, ngoài chút niềm vui nhanh qua<br>Thì anh chỉ mang cho em những ưu phiền<br>Dù chẳng ai hiểu anh hơn em, dù biết rồi đây cô đơn<br>Thì anh vẫn muốn để em ra đi<br>Rời xa nhé kỷ niệm buồn, rời những rung động bồi hồi<br>Gạt cay đắng anh tìm một lối đi không còn em<br>Chợt trong giấc mộng ùa về, hình dáng ấy chẳng nhạt nhòa<br>Để anh biết sẽ chẳng bao giờ quên người anh yêu, anh nhớ em<br>Rời xa nhé kỷ niệm buồn, rời những rung động bồi hồi<br>Gạt cay đắng anh tìm một lối đi không còn em<br>Chợt trong giấc mộng ùa về, hình dáng ấy chẳng nhạt nhòa<br>Để anh biết sẽ chẳng bao giờ quên người anh yêu, anh nhớ em`
    },
    {
        name: "Ánh Trăng Tình Ái",
        path: "../music/song7.mp3",
        img: "../Images/img/img7.jpg",
        singer: "Dương Edward",
        lyric: `Một đêm trăng sáng<br>Chúng mình hai đứa<br>Hẹn thề sẽ mãi bên nhau<br>Ánh trăng vàng vì nàng<br>Gió thay lời dịu dàng<br>Tha thiết yêu, tình yêu chứa chan<br>Từng lời anh nói<br>Sao trời đưa lối<br>Bờ môi quấn quýt không rời<br>Trái tim chợt bồi hồi<br>Hứa yêu người trọn đời<br>Không dối gian mình anh mãi thôi<br>Hãy đưa anh vào giấc mộng<br>Dìu anh vào thiên đường tình ái<br>Giấc mơ như một đoá hồng<br>Ngày tương tư... đêm đêm nhớ mong<br>Từng lời anh nói<br>Sao trời đưa lối<br>Bờ môi quấn quýt không rời<br>Trái tim chợt bồi hồi<br>Hứa yêu người trọn đời<br>Không dối gian mình anh mãi thôi<br>Hãy đưa anh vào giấc mộng<br>Dìu anh vào thiên đường tình ái<br>Giấc mơ như một đoá hồng<br>Ngày tương tư... đêm đêm nhớ mong ohhh<br>Hãy đưa anh vào giấc mộng<br>Dìu anh vào thiên đường tình ái<br>Giấc mơ như một đoá hồng<br>Ngày tương tư... đêm đêm nhớ mong<br>Một đêm trăng sáng<br>Chúng mình hai đứa<br>Hẹn thề sẽ mãi bên nhau<br>Ánh trăng vàng vì nàng<br>Gió thay lời dịu dàng<br>Tha thiết yêu, tình yêu chứa chan<br>Ánh trăng vàng vì nàng<br>Gió thay lời dịu dàng<br>Tha thiết yêu, tình yêu chứa chan<br>Trái tim chợt bồi hồi<br>Hứa yêu người trọn đời<br>Không dối gian mình anh mà thôi`
    },
    {
        name: "Yêu 5",
        path: "../music/song8.mp3",
        img: "../Images/img/img8.jpg",
        singer: "Rhymastic",
        lyric: `Xin những bối rối này cứ thế lên ngôi<br>Xin con tim rẽ lối tìm giây phút nghẹn lời<br>Cho thêm chơi vơi, để những ánh mắt đôi môi<br>Chạm nhau mang theo gọi mời<br>Xin cho ta tan vào những đắm đuối miên man<br>Khi em ghé ngang đời chợt mang sắc hương thiên đàng<br>Và cho những ấm áp lại đến lấp kín nhân gian<br>Ngày ta yên vui cùng nàng<br>[Pre-Hook]<br>Nhẹ nhàng âu yếm giữa chốn mơ<br>Cùng tìm kiếm bao ý thơ<br>Để đắm say trong tiếng nhạc du dương<br>Hồn sa theo bước ta ngẩn ngơ<br>Dù ngàn kiếp ta vẫn chờ<br>Chỉ cần có phút giây này trao yêu thương<br>[Hook]<br>Cuz baby it’s always you<br>It"s always you<br>It"s always you<br>It"s always you...always you... (x2)<br>[Rap]<br>Ta như đi qua hết bao nhiêu mê say trên đời<br>Như yêu thêm cả nghìn kiếp khi ta một giây bên người<br>Vì chỉ cẩn một ánh nhìn mà em trao<br>Là tuổi xuân của ta như hóa được thành chiêm bao<br>Với mỗi sáng thức giấc nghe em bên ta vui cười<br>Cho đêm ta ngây ngất, ru tai êm qua đôi lời<br>Đầy ngọt ngào và trong veo, cùng hòa làm trăng sao<br>Dìu dắt đôi tim bên nhau đi theo bao yêu thương dâng trào<br>Và ta xin đánh đổi một rừng tia nắng để lấy chút hơi ấm của em<br>Xin đổi đi hết tiền bạc danh tiếng, những thứ hàng trăm người thèm<br>Bởi cả ngàn điều phù phiếm đâu bằng một thoáng môi mềm<br>Khi đời này sẽ mang đầy nuối tiếc nếu không có nàng ở bên<br>Nhìn em ta mới thêm yêu từng khoảnh khắc<br>Mang hết tương tư giấu vào theo từng bản nhạc<br>Để mai này tình nở như muôn hoa không tàn sắc<br>Lưu giữ mãi nơi này một câu chuyện ngàn năm`
    },
    {
        name: "Khi phải quên đi",
        path: "../music/song9.mp3",
        img: "../Images/img/img9.jpg",
        singer: "Phan Mạnh Quỳnh",
        lyric: `Đau buồn chẳng phải khi người bỏ anh đi<br>Vì khi yêu thương phôi phai anh biết làm gì<br>Chuyện đến sẽ đến chẳng như ta vẫn nghĩ<br>Người kết thúc vội những phút giây ngủ mê.<br>Đau buồn chẳng phải khi người quên tên anh<br>Thời gian qua nhanh mang theo ký ức ngày nào<br>Cuộc sống tiếp diễn đưa em đến người khác<br>Rồi chẳng mấy khi nhớ lại một người đã đi qua.<br>Nhưng anh đau khi anh đánh mất em<br>Làm sao anh quên đi năm tháng ấy<br>Từng hoài niệm đó anh ghi vào tim<br>Từng ấm áp ấy anh giữ lại mãi<br>Cho vơi chua cay khi anh cô đơn.<br>Nhưng anh đau khi em dứt cánh tay<br>Rồi quay lưng đi khi anh cố níu<br>Tìm hình dáng ấy trong đêm mù tối<br>Tìm tiếng nói ấy sau những màn mưa<br>Ai xua tan đi giây phút có em qua rồi.<br>Ngước nhìn lên trời cao rồi hỏi trăng sao<br>Tình yêu nơi nao không mang những tiếng thở dài<br>Hạnh phúc quá ngắn khi ta sớm lìa nhau<br>Đành dấu chôn đi nỗi buồn chờ ngày hình dung phai.<br>Nhưng anh đau khi anh đánh mất em<br>Làm sao anh quên đi năm tháng ấy<br>Từng hoài niệm đó anh ghi vào tim<br>Từng ấm áp ấy anh giữ lại mãi<br>Cho vơi chua cay khi anh cô đơn.<br>Nhưng anh đau khi em dứt cánh tay<br>Rồi quay lưng đi khi anh cố níu<br>Tìm hình dáng ấy trong đêm mù tối<br>Tìm tiếng nói ấy sau những màn mưa<br>Ai xua tan đi giây phút có em.<br>Nhưng anh đau khi anh đánh mất em<br>Làm sao anh quên đi năm tháng ấy<br>Từng hoài niệm đó anh ghi vào tim<br>Từng ấm áp ấy anh giữ lại mãi<br>Cho vơi chua cay khi anh cô đơn.<br>Nhưng anh đau khi em dứt cánh tay<br>Rồi quay lưng đi khi anh cố níu<br>Tìm hình dáng ấy trong đêm mù tối<br>Tìm tiếng nói ấy sau những màn mưa<br>Ai xua tan đi giây phút có em qua rồi.`
    },
    {
        name: "Làm sao giữ",
        path: "../music/song10.mp3",
        img: "../Images/img/img10.jpg",
        singer: "Phan Mạnh Quỳnh",
        lyric: `Không như xưa<br>Chúng ta giờ đây thất hứa<br>Cứ im lặng sau cơn mưa<br>Vì nói chi giờ cũng thừa<br>Trong đêm thâu<br>Có anh và em lo âu<br>Biết ta ngày mai xa nhau<br>Khi tiếng yêu đã phai màu<br>Dù biết chẳng phải cứ hễ yêu nhau<br>Là sẽ sánh bước đi chung trọn đời<br>Và dù biết có lẽ sẽ nhớ<br>Những tháng năm qua<br>Thì khi không còn niềm tin<br>Anh nghĩ ta nên chia đôi<br>Hãy đi đi đi đi<br>Một khi chẳng còn yêu gì<br>Tình yêu đã rời xa vì<br>đã có lắm khi anh làm em ướt mi<br>Buông tay nhau thôi<br>Sửa sai chẳng kịp nữa rồi<br>Lầm lỗi đã nhiều quá rồi<br>Phút bối rối trách ai cũng thế thôi<br>Nhưng trong con tim hình như<br>Vẫn còn nỗi niềm<br>Ngày xưa quá nhiều kỷ niệm<br>Nói xa nhau nghe buồn như đêm<br>Hãy cứ bước tiếp rồi sẽ có người trong đời<br>Tìm em để làm em cười<br>Hạnh phúc mới<br>Sống tốt nhé<br>Hãy yêu người ấy mãi nhé<br>Dẫu cho rằng sẽ có thể<br>Anh đớn đau khi đêm về<br>Quá khứ ấy<br>Cứ xem phù du như mây<br>Cứ quên mình anh nơi đây<br>Cứ vui cười mỗi ngày<br>Dù biết chẳng phải cứ hễ yêu nhau<br>Là sẽ sánh bước đi chung trọn đời<br>Và dù biết có lẽ sẽ nhớ<br>Những tháng năm qua<br>Nhưng khi không còn niềm tin<br>Anh nghĩ ta nên chia đôi<br>Hãy đi đi đi đi<br>Một khi chẳng còn yêu gì<br>Tình yêu đã rời xa vì<br>đã có lắm khi anh làm em ướt mi<br>Buông tay nhau thôi<br>Sửa sai chẳng kịp nữa rồi<br>Lầm lỗi đã nhiều quá rồi<br>Phút bối rối trách ai cũng thế thôi<br>Nhưng trong con tim hình như<br>Vẫn còn nỗi niềm<br>Ngày xưa quá nhiều kỷ niệm<br>Nói xa nhau nghe buồn như đêm<br>Hãy cứ bước tiếp rồi sẽ có người trong đời<br>Tìm em để làm em cười<br>Hạnh phúc mới<br>Hãy đi đi đi đi<br>Một khi chẳng còn yêu gì<br>Tình yêu đã rời xa vì<br>đã có lắm khi anh làm em ướt mi<br>Buông tay nhau thôi<br>Sửa sai chẳng kịp nữa rồi<br>Lầm lỗi đã nhiều quá rồi<br>Phút bối rối, bối rối<br>Nhưng trong con tim hình như<br>Vẫn còn nỗi niềm<br>Ngày xưa quá nhiều kỷ niệm<br>Nói xa nhau nghe buồn như đêm<br>Hãy cứ bước tiếp rồi sẽ có người trong đời<br>Tìm em để làm em cười<br>Hạnh phúc mới<br>Yêu em nhiều hơn<br>Ôm em chặt hơn.`
    },
    {
        name: "Ngày chưa giông bão",
        path: "../music/song11.mp3",
        img: "../Images/img/img11.jpg",
        singer: "Bùi Lan Hương",
        lyric: `Vì ta yêu nhau như cơn sóng vỗ<br>Quẩn quanh bao năm không buông mặt hồ<br>Thuyền anh đi xa bờ thì em vẫn dõi chờ<br>Duyên mình dịu êm thơ rất thơ<br>Và anh nâng niu em như đóa hoa<br>Còn em xem anh như trăng ngọc ngà<br>Tự do như mây vàng mình phiêu du non ngàn<br>Dẫu trần gian bao la đến đâu nơi anh là nhà<br>Khi anh qua thung lũng<br>Và bóng đêm ghì bàn chân<br>Đời khiến anh chẳng còn nhiều luyến lưu, anh mong lau mắt em khô<br>Ta yêu sai hay đúng?<br>Còn thấy đau là còn thương<br>Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu<br>Hết muộn sầu<br>Lạc bước giữa những đam mê tăm tối<br>Liệu máu vẫn nóng nơi tim bồi hồi?<br>Người năm xưa đâu rồi?<br>Lạnh băng tiếng khóc cười<br>Anh ở nơi xa xôi vô lối<br>Mặt đất níu giữ đôi chân chúng ta<br>Thì bay lên trong cơn mơ kỳ lạ<br>Ở đó anh vẫn là người yêu thương chan hòa<br>Dẫu trần gian cho anh đắng cay nơi em là nhà<br>Khi anh qua thung lũng<br>Và bóng đêm ghì bàn chân<br>Đời khiến anh chẳng còn nhiều luyến lưu, anh mong lau mắt em khô<br>Ta yêu sai hay đúng?<br>Còn thấy đau là còn thương<br>Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu<br>Hết muộn sầu<br>Khi anh qua thung lũng<br>Và bóng đêm ghì bàn chân<br>Đời khiến anh chẳng còn nhiều luyến lưu, anh mong lau mắt em khô<br>Ta yêu sai hay đúng?<br>Còn thấy đau là còn thương<br>Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu<br>Khi anh qua thung lũng<br>Và bóng đêm ghì bàn chân<br>Đời khiến anh chẳng còn nhiều luyến lưu, anh mong lau mắt em khô<br>Ta yêu sai hay đúng?<br>Còn thấy đau là còn thương<br>Khi bão qua rồi biết đâu sẽ đi tới nơi của ngày đầu<br>Hết muộn sầu<br>Vì ta yêu nhau như cơn sóng vỗ<br>Quẩn quanh bao năm không buông mặt hồ<br>Thuyền anh đi xa bờ thì em vẫn dõi chờ<br>Duyên mình dịu êm thơ rất thơ...`
    },
    { //11
        name: "Before You Go",
        path: "../music/Before You Go.mp3",
        img: "../Images/img/Before You Go.jpg",
        singer: "Lewis Capaldi",
        lyric: `I fell by the wayside, like everyone else<br>I hate you, I hate you, I hate you<br>But I was just kidding myself<br>Our every moment, I start to replace<br>'Cause now that they're gone<br>All I hear are the words that I needed to say<br>When you hurt under the surface<br>Like troubled water running cold<br>Well, time can heal, but this won't<br>So, before you go<br>Was there something I could've said<br>To make your heart beat better?<br>If only I'd have known you had a storm to weather<br>So, before you go<br>Was there something I could've said<br>To make it all stop hurting?<br>It kills me how your mind can make you feel so worthless<br>So, before you go<br>Was never the right time, whenever you called<br>Went little, by little, by little until there was nothing at all<br>Our every moment, I start to replay<br>But all I can think about is seeing that look on your face<br>When you hurt under the surface<br>Like troubled water running cold<br>Well, time can heal, but this won't<br>So, before you go<br>Was there something I could've said<br>To make your heart beat better?<br>If only I'd have known you had a storm to weather<br>So, before you go<br>Was there something I could've said<br>To make it all stop hurting?<br>It kills me how your mind can make you feel so worthless<br>So, before you go<br>Would we be better off by now<br>If I'd let my walls come down?<br>Maybe I guess we'll never know<br>You know, you know<br>Before you go<br>Was there something I could've said<br>To make your heart beat better?<br>If only I'd have known you had a storm to weather<br>So, before you go<br>Was there something I could've said<br>To make it all stop hurting?<br>It kills me how your mind can make you feel so worthless<br>So, before you go...`
    },
    { //12
        name: "Someone You Loved",
        path: "../music/Someone You Loved.mp3",
        img: "../Images/img/Someone You Loved.jpg",
        singer: "Lewis Capaldi",
        lyric: `I'm going under and this time I fear there's no one to save me<br>This all or nothing really got a way of driving me crazy<br>I need somebody to heal<br>Somebody to know<br>Somebody to have<br>Somebody to hold<br>It's easy to say<br>But it's never the same<br>I guess I kinda liked the way you numbed all the pain<br>Now the day bleeds<br>Into nightfall<br>And you're not here<br>To get me through it all<br>I let my guard down<br>And then you pulled the rug<br>I was getting kinda used to being someone you loved<br>I'm going under and this time I fear there's no one to turn to<br>    This all or nothing way of loving got me sleeping without you<br>Now, I need somebody to know<br>Somebody to heal<br>Somebody to have<br>Just to know how it feels<br>It's easy to say but it's never the same<br>I guess I kinda liked the way you helped me escape<br>Now the day bleeds<br>Into nightfall<br>And you're not here<br>To get me through it all<br>I let my guard down<br>And then you pulled the rug<br>I was getting kinda used to being someone you loved<br>And I tend to close my eyes when it hurts sometimes<br>I fall into your arms<br>I'll be safe in your sound 'til I come back around<br>For now the day bleeds<br>Into nightfall<br>And you're not here<br>To get me through it all<br>I let my guard down<br>And then you pulled the rug<br>I was getting kinda used to being someone you loved<br>But now the day bleeds<br>Into nightfall<br>And you're not here<br>To get me through it all<br>I let my guard down<br>And then you pulled the rug<br>I was getting kinda used to being someone you loved<br>I let my guard down<br>And then you pulled the rug<br>I was getting kinda used to being someone you loved.`
    },
    { //13
        name: "Đợi",
        path: "../music/Đợi.mp3",
        img: "../Images/img/Đợi.jpg",
        singer: "Vũ",
        lyric: `Tìm bài ca buồn, khi giấc mơ nay còn đâu bao sắc hồng<br>vì cánh chim đang mải miết bay thật nhanh<brTìm vài câu chuyện, từ lâu đã vỡ tan theo thời gian qua tiếng nhạc<br>vì lúc xưa, anh từng nhớ một người làm anh thao thức đêm<br>Ừ thì đấy một thời cùng sống trong điệu nhạc<br>cùng nắm tay em đi khắp muôn nơi<br>Nhìn lại anh giờ đây chìm trong màn đêm<br>Ly cà phê dần tan cùng anh theo năm tháng, theo em, theo em.<br>Em như làn mây như lời hát<br>Em mơ màng theo trời nắng lên<br>Nhớ em nghẹn ngào<br>Nhớ em nhẹ nhàng<br>Xin em<br>Thôi đừng đi quá xa<br>Em như màu xanh mang hạnh phúc<br>Em buông tự do chạy với anh<br>Nhớ e nghẹn ngào<br>Nhớ em nhẹ nhàng<br>Xin em<br>Thôi đừng đi quá xa<br>....`
    },
    { //14
        name: "Mùa Mưa Ngâu Nằm Cạnh",
        path: "../music/Mùa Mưa Ngâu Nằm Cạnh.mp3",
        img: "../Images/img/Mùa Mưa Ngâu Nằm Cạnh.jpg",
        singer: "Vũ",
        lyric: `Chẳng phải em là hồn, của cây<br>Mang câu hát đem đi đùa vui<br>Sống trong bao câu chuyện b<br>uồnTìm đâu đam mê say đắm ơi<br>Chẳng phải em là vải, màu nâu<br>Mang hơi ấm cho anh ngày mưa rơi đầy<br>Cuối câu chuyện là đêm trắng<br>Mình em<br>Cô đơn<br>Và cơn mưa chiều qua chờ ai?<br>Cuốn theo em bỏ rơi<br>Tiếc đôi vai gầy<br>Bên phố đông<br>Một mùa mưa ngâu ngây ngất<br>Trôi đi thật nhanh là em<br>Ướt đôi môi lẻ loi<br>Tiếc thương ân tình<br>Em yêu mưa<br>Và mùa mưa ngâu<br>Nằm cạnh em<br>Chẳng phải em là hồn, của cây<br>Mang câu hát đem đi đùa vui<br>Sống trong bao câu chuyện buồn<br>Tìm đâu đam mê say đắm ơi<br>Chẳng phải em là vải, màu nâu<br>Mang hơi ấm cho anh ngày mưa rơi đầy<br>Cuối câu chuyện là đêm trắng<br>Mình em<br>Cô đơn<br>Và cơn mưa chiều qua chờ ai?<br>Cuốn theo em bỏ rơi<br>Tiếc đôi vai gầy<br>Bên phố đông<br>Một mùa mưa ngâu ngây ngất<br>Trôi đi thật nhanh là em<br>Ướt đôi môi lẻ loi<br>Tiếc thương ân tình<br>Em yêu mưa<br>Và mùa mưa ngâu<br>Nằm cạnh em`
    },
    { //15
        name: "Ái Nộ",
        path: "../music/Ái Nộ.mp3",
        img: "../Images/img/Ái Nộ.jpg",
        singer: "Masew x KhoiVu",
        lyric: `Người đi xa có nhớ chăng?<br>Dòng thư tay lời hỏi thăm<br>Vài câu ca dưới ánh trăng mờ<br>Hôm đó có ai đang trở về<br>Lệ dần phai theo tháng năm<br>Lời biệt ly sao khó khăn<br>Vùi đầu trong chăn gối<br>Mong được nói hết tâm tư này<br>Đừng dối em ơi<br>Đừng lừa em ơi<br>Đừng vờn con tim anh như trò đùa<br>Đừng hứa đôi ba lời cuội nhăng nha đừng để<br>À í a í a<br>Đừng dối em ơi, toàn là văn thôi<br>1 lần đau thôi anh đủ mệt rồi<br>Đừng hứa thêm chi lệ dài trên mi<br>Đừng để anh hoá ma lai<br>Khói sương thật mơ màng<br>Chết trong sự ngỡ ngàng<br>Đôi ba lời câu hình thức ta ngân nga để lại cho nàng<br>Rồi giờ này nàng cùng với ai?<br>Chẳng còn ngày nào mặn nồng với ta<br>Đời sang trang linh hồn lang thang<br>Phận này ngang ngang một mình lướt trên con đò<br>Tình tình tang tang giai điệu ngân vang<br>Từ biệt nhân gian à ý aa<br>Người đi xa có nhớ chăng?<br>Dòng thư tay lời hỏi thăm<br>Vài câu ca dưới ánh trăng mờ<br>Hôm đó có ai đang trở về<br>Lệ dần phai theo tháng năm<br>Lời biệt ly sao khó khăn<br>Vùi đầu trong chăn gối mong được nói hết tâm tư này<br>Đừng dối em ơi<br>Đừng lừa em ơi<br>Đừng vờn con tim anh như trò đùa<br>Đừng hứa đôi ba lời cuội nhăng nha đừng để<br>A í a í a<br>Đừng dối em ơi, toàn là văn thôi<br>Một lần đau thôi anh đủ mệt rồi<br>Đừng hứa thêm chi lệ dài trên mi<br>Đừng để anh hoá ma lai<br>Phận duyên be bé, cơi trầu buồng cau<br>Hẹn thề bên nhau đến khi bạc đầu`
    }
];


// All functions

//function play the song when you click 
function play_the_song(a) {
    main.classList.add('close-element');
    navigation.classList.add('close-element');
    play_the_song_do.classList.remove('close-element');
    load_track(a);
    playsong();
}

//function close tab "trang phát nhạc"
function stop_the_song() {
    main.classList.remove('close-element');
    navigation.classList.remove('close-element');
    play_the_song_do.classList.add('close-element');
}

//function open tab "trang phát nhạc"
function open_play_song() {
    main.classList.add('close-element');
    navigation.classList.add('close-element');
    play_the_song_do.classList.remove('close-element');
}

// function load the track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    title2.innerHTML = All_song[index_no].name;
    lyric.innerHTML = All_song[index_no].lyric;
    track_image.src = All_song[index_no].img;
    bottom_img.src = All_song[index_no].img;
    bottom_name.innerHTML = All_song[index_no].name;
    bottom_auth.innerHTML = All_song[index_no].singer;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider, 1000);
}

//btn show lyric
function showLyric() {
    lyricclass.classList.add('open');
}
//btn hide lyric
function hideLyric() {
    lyricclass.classList.remove('open');
}
let flag_volume = 0;
let before_volume = 0;
//mute sound function
function mute_sound() {
    if (flag_volume === 0) {
        before_volume = track.volume;
        track.volume = 0;
        volume.value = 0;
        volume_show.innerHTML = 0;
        flag_volume = 1;
        recent_volume.value = track.volume * 100;
        recent_myRangeVolume.value = track.volume * 100;
    } else {
        flag_volume = 0;
        track.volume = before_volume;
        volume.value = before_volume * 100;
        var temp = parseInt(before_volume * 100);
        volume_show.innerHTML = String(temp);
        before_volume = 0;
        recent_volume.value = track.volume * 100;
        recent_myRangeVolume.value = track.volume * 100;
    }
}

// checking.. the song is playing or not
function justplay() {
    if (Playing_song == false) {
        playsong();

    } else {
        pausesong();
    }
}

// reset song slider
function reset_slider() {
    slider.value = 0;
    bottom_slider.value = 0;
}

// play song
function playsong() {
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    bottom_play.innerHTML = '<i class="fas fa-pause" onclick="justplay()" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    bottom_play.innerHTML = '<i class="fas fa-play" onclick="justplay()" aria-hidden="true"></i>';
}

// next song
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}

// previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();

    } else {
        index_no = All_song.length - 1;
        load_track(index_no);
        playsong();
    }
}


// change volume
function volume_change(a) {
    if (a === 0) {
        track.volume = recent_myRangeVolume.value / 100;
        recent_volume.value = track.volume * 100;
    }
    if (a === 1) {
        track.volume = recent_volume.value / 100;
        recent_myRangeVolume.value = track.volume * 100;
    }
    volume_show.innerHTML = recent_volume.value;
}

// change slider position
function change_duration(a) {
    if (a === 1) {
        slider_position = track.duration * (slider.value / 100);
        track.currentTime = slider_position;
    } else {
        slider_position_t = track.duration * (bottom_slider.value / 100);
        track.currentTime = slider_position_t;
    }
}

// autoplay function
function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "#148F77";
    }
}


function range_slider() {
    let position = 0;

    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
        bottom_slider.value = position;
    }

    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        bottom_play.innerHTML = '<i class="fas fa-play" onclick="justplay()" aria-hidden="true"></i>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}