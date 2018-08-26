///定义全局变量，给出游戏开局的提示。
            var time = 0;            ///游戏总操作次数，看做游戏已经过时间
            var finaltime = 10;      ///游戏结束的倒计时
            var mousecounter = 0;    ///鼠标点击的按钮次数
            var excounter = 0;       ///一次操作内点击按钮的次数
            var flag = 0;            ///表示页面状态，可以判断打开目录的层数
            var relativetime = 1     ///游戏中经过的天数
            var possibility1 = 0.1;  ///罪恶值达到一定等级后，每周出现损失的概率
            var possibility2 = 0.2;
            var possibility3 = 0.3;
            var spy = 0.1;           ///解锁监视技能后出现损失的概率
            var control_1 = 0;       ///定义控制变量
            var control_2 = 0;
            var control_3 = 0;
            var control_4 = 0;
            var control_5 = 0;
            alert("康哥，欢迎开始你的创业生活，期待你的成功！");
            alert("在游戏的开始你可以先探索八大模块的功能，不过对于刚开始创业你来说，先赚取一定的本金才是王道\n不过还要兼顾自己的健康，疲劳程度哦");

///定义kang类，其中包含玩家各项属性，也包含部分事件的函数
            var kang = {
				label: "创业者",
				sex:   "male",
				name : "LiRuiKang",
			    health : 100,
			    fatigue : 0,
			    spirit: 100,
				wealth : 1000,
				stock: 0,
				fashion: 10,
				guilty: 0,
				numOfBussiness: 0,
				numOfEmployee: 0,
				able: true,
				sum: 0,
				justice : 0,


                ///定义玩家各项技能变量，通过雇佣员工或成立公司来解锁各项技能或增加能力值
				ability: {
			         certificate: false,
	                 doctor: false,
	                 internet: false,
                     lawbreak: false,
                     economic: false,
                     beauty: false,
                     happy: false,
                     JP: false,
				     EN: false,
				     DE: false,
				     antiLawLevel: 0,
				     governpoint: 1,
				     malehooker:0
				},
			
                ///定义各项技术开发状态，通过创业基地中的研究来解锁
				tech: {
					high: false,
					protection: false,
					security: false,
					launder: false,
					drug: false,
					archtecture: false
				},

                ///定义部分事件函数
				employee: [],
				business: [],
				exercise : function(wayToExercise){
					if(wayToExercise == "jog"){
						this.health += 3;
						this.fatigue += 6;
						alert("环西操跑步五公里\n健康值+3\n疲劳值+6\n");
					}
					if(wayToExercise == "buildup"){
						this.health += 15;
						this.fatigue += 5;
						this.wealth -= 100;
						this.spirit += 6;
						alert("西区健身房锻炼一小时，瞟到一个细腿妹子\n健康值+15\n疲劳值+5\n财富-100\n心情+6");
                    }
                    if (wayToExercise == "athome"){
                        
                        this.fatigue -= 10;
                        
                        alert("你宅在家里一天，除了喝了一瓶神仙快乐水什么也没干\n疲劳-10");
                    }
					},

				smoking : function(brandOfSmoke){
					if(brandOfSmoke == "雪茄"){
						this.health -= 5;
						this.fashion += 10;
						this.spirit += 6;
						this.wealth -= 100;
						alert("旁边的妹子看劳资眼神都不一样了，劳资就是壕到抽大牌子\n健康值-5\n心情+6\n时髦+10\n财富-100");
					}

					if(brandOfSmoke == "中华"){
						this.health -= 8;
						this.fashion += 4;
						this.spirit += 3;
						this.wealth -= 50;
						alert("饭后一根烟，赛过活神仙\n健康值-8\n心情+3\n时髦+4\n财富-50");
					}

					if(brandOfSmoke == "大前门"){
						this.health -= 9;
						this.fashion += 1;
						this.spirit += 2;
						this.wealth -= 10;
						alert("抽根屌丝烟，劳资是神仙\n健康值-9\n心情+2\n时髦+1\n财富-10");
					}
				},

				entertainment : function(wayToEntertainment){
					if(wayToEntertainment =="打LOL"){
						this.health -= 3;
						this.spirit += 5;
						this.fatigue -=7;
						alert("傻逼队友，劳资又掉到黄铜五了\n疲劳值-7\n健康值-3\n心情+5");
						}
					if(wayToEntertainment=="洗脚"){
						this.health += 2;
						this.spirit += 15;
						this.fatigue -= 15;
						this.guilty += 5;
						this.wealth -= 200;
						alert("啊～啊～啊～\n嘿嘿嘿。。。\n健康值+2\n疲劳值-15\n财富-180\n心情+15\n罪恶值+15");
						}

					if(wayToEntertainment == "烫头"){
						this.wealth -= 100;
						this.spirit +=10;
						this.fashion += 20;
						this.guilty +=3;
						alert("やめなさい！お客様！\n财富-100\n心情+10\n时髦+20\n罪恶值+5");
					}
				},

				getMoney: function(wayToGetMoney){
					if(kang.spirit<10){alert("没心情，没意思，打工是不可能打工的");}
					else{
					if(wayToGetMoney == "搬砖"){
						this.health -= 2;
						this.fashion -= 5 ;
						this.fatigue += 10;
						this.wealth += 800;
						this.spirit -=5;
						alert("投身于新时代中国社会主义城市建设第一线\n健康值-2\n疲劳值+10\n心情-5\n时髦-5\n财富+1000");
					}

					if(wayToGetMoney == "出卖色相"){
						this.health -= 20;
						this.fatigue += 20;
						this.fashion += 5;
						this.spirit += 5;
						this.wealth += 3000;
						alert("妾身身如浮萍，幸得夫人垂怜。。。\n健康值-20\n心情+5\n时髦+5\n疲劳值+20\n财富+3000");
					}

					if(wayToGetMoney == "实习生"){
						this.health -= 5;
						this.fatigue += 15;
						this.spirit -= 5;
						this.wealth += 1000;
						alert("资本家都是靠剥削为生的，\n健康值-5\n心情-5\n疲劳值+15\n财富+1000");
					}

					if(wayToGetMoney == "写真模特"){
						this.guilty += 10;
						this.fatigue += 10;
						this.spirit += 10;
						this.wealth += 2000;
						alert("怪，怪不好意思的。。。\n罪恶值+10\n心情+10\n疲劳值+10\n财富+2000");
                    }
                    if (wayToGetMoney == "拉赞助") {
                            if (kang.numOfBussiness > 0) {

                                this.fatigue += 5;
                                this.spirit -= 5;
                                this.wealth += 2500;
                                alert("唉，又磨了半天嘴皮子，最后才拿到这么点钱，不过总比出去搞事强。。。心累\n心情-5\n疲劳值+5\n财富+2500");
                            
                            }
                            else
                                alert("你连自己的公司都没有你来拉什么赞助，你以为你在上星光大道吗？");

                    }

				    }
			    }
				
			}


///编写创建公司相关函数
            function Enterprise() {
				this.rank= 0;
				this.input= 5000;
				this.startmoney= 10000;
				this.security= 0;
				this.technology= null;
				this.SetNewCompany = function () {
				    ///判断是否达到基本条件并给出提醒
					if(kang.ability.governpoint < 1)
						alert("手下无人，没有管理人才，难行此计");
					if(kang.wealth < 10000)
					    alert("就这点钱还开公司，快醒醒起来搬砖了--");
				    ///根据达到条件不同给出不同剧情
					if((kang.ability.governpoint > 0)&&(kang.wealth > 10000)){

						if(kang.numOfBussiness == 0){
                            alert("恭喜，新公司——康哥娱乐交友一条龙股份有限公司——已经可以运作了");
                            alert("康总好！");
                            alert("你现在高兴又迷茫，到底公司应该做什么呢，你又想起了马化腾的嘴脸，此刻你只想多赚钱\n有了！听说灰色行业最赚钱了，那公司就开展灰色产业吧");
                            alert("可是灰色行业做不长啊。。。哎，管他呢，大不了像莆田系一样，赚了钱再洗白");
                            alert("此时你正好走到了小吃城门口，进去愉快地吃了一份黄焖鸡米饭并加了一份麻辣烫，一份肠粉和一份煎包\n因为这个套餐才符合你康总的身份，nice！");
					    kang.numOfBussiness ++;
					    kang.business.push(this);
						kang.stock += 20;
					    kang.wealth -= this.startmoney;
					    kang.sum += this.input;
						}

					   else if((kang.numOfBussiness > 0)&&(kang.ability.certificate)){
					    alert("恭喜，新的子公司——康哥洗脚按摩桑拿舞会服务股份有限公司——已经可以运作了");
					    kang.numOfBussiness ++;
						kang.stock += 40;
					    kang.business.push(this);
					    kang.wealth -= this.startmoney;
					    kang.sum += this.input;
					   }

					   else{
					    	 alert("缺乏建筑技术，导致公司新门面装修时出现塌方，人员伤亡惨重，本人也被深埋废墟，奄奄一息\n财富值-2000，健康值=15");
					    	 kang.wealth -=2000;
					    	 kang.health = 15;
					        }
					}
				}
			}


///创建各个员工的类，包含个员工的解锁条件以及带来收益
            var LM = {
				ID: "L",
				label1: "计算机",
				label2: "日语",
				label3: "",
				name : "流氓",
				sex :"male",
			    salary: 10000,
			    stock : 0,
			    gethim: 10,
			    loyalty: 80,
			    situation : "unemployed",
			    graduateUniversity:"华中科技大学",
			    BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("穷逼！给劳资滚!");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("放心，只要钱到位，没有我办不到的事！\n现在可以研发互联网安全科技了");
			    		alert("获得技能-日语，计算机");
			    		kang.ability.JP = true;
			    		kang.ability.internet = true;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var JG ={
				ID: "J",
				label1: "金融",
				label2: "法律",
				label3: "德语",
				name:"姜哥",
				sex :"male",
				salary: 12000,
				stock: 0,
				gethim: 15,
				loyalty: 70,
				situation: "unemployed",
				graduateUniversity:"武汉大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("收声!!!");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("我是为了理想，而不是钱，才愿意追随康哥的\n得到时尚潮男姜戈，时髦度+20，'法律'能力生效，洗白度+1");
			    		alert("获得技能—金融，法律，德语");
			    		kang.ability.economic = true;
			    		kang.ability.DE = true;
			    		kang.justice ++;
			    	    kang.fashion += 20;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var ZW ={
				ID: "Z",
				label1: "管理",
				label2: "工程",
				label3: "恶霸",
				salary: 14000,
				stock: 0,
				gethim: 8,
			    loyalty: 50,
				name: "紫薇",
				sex :"male",
				situation: "unemployed",
				graduateUniversity:"武汉大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("劳资是你请不动的人物～!");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("介一块都是劳资的地盘，以后康哥你可以横行霸道了～\n 引起警察警觉临界罪恶值增加");
			    		alert("得到能力管理，工程");
			    		kang.ability.governpoint++;
			    		kang.ability.certificate = true;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var HB ={
				ID: "H",
				level: 5,
				label1: "管理",
				label2: "金融",
				label3: "英语",
				salary: 20000,
				stock: 0,
				gethim: 15,
			    loyalty: 20,
				name: "好鳖",
				sex :"male",
				situation: "unemployed",
				graduateUniversity:"南京大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("你这穷逼给本老板擦鞋都不配！");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("钱到手了，一切都好商量，康老板放心，这一块的领导我都打过坨子了，不必害怕\n 现在开始可以通过到警察局贿赂领导来减少罪恶值了");
			    		kang.ability.lawbreak = true;
			    		alert("获得技能—金融，管理，英语");
			    		kang.ability.economic = true;
			    		kang.ability.governpoint++;
			    		kang.ability.EN = true;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var WW ={
				ID: "W",
				label1: "管理",
				label2: "工程",
				label3: "厮混",
				salary: 10000,
				stock: 0,
				gethim: 10,
			    loyalty: 60,
				name: "闻威",
				sex :"male",
				situation: "unemployed",
				graduateUniversity:"南京大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("滚开穷逼！劳资要玩游戏!");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("康总这里可比峡谷好玩多了啊～～\n获得高级游戏队友，每次游戏恢复心情增加，减少疲劳增加");
			    		alert("获得‘厮混青年’，每个星期工作后心情将不再自动减少");
			    		alert("获得技能—工程，管理");
			    		kang.employee.push(this);
			    		kang.ability.certificate = true;
			    		kang.ability.governpoint++;
			    		kang.ability.happy = true;
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var DY={
				ID: "D",
				label1: "英姿",
				label2: "工程",
				label3: "",
				name : '小兑',
				sex :"male",
			    salary: 9000,
			    stock: 0,
				gethim: 5,
			    loyalty: 60,
			    situation : "unemployed",
			    graduateUniversity:"华中科技大学",
			    BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("不是我说，我一天都能吃穷你！");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("有饭吃有觉睡，我愿为康老板鞍前马后——\n获得好逸恶劳的手下，每周收入降低，但是可以在会所开放新的项目了");
			    		kang.sum -= 500;
			    		alert("获得技能—工程，英姿");
			    		if(kang.ability.malehooker == 2){
			    			kang.ability.malehooker = 3;
			    		}
			    		
			    		if(kang.ability.malehooker== 0){
			    			kang.ability.malehooker = 1;
			    		}
			    		kang.ability.certificate = true;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var TS={
				ID: "T",
				label1: "医学",
				label2: "德语",
				label3: "",
				salary: 12000,
			    loyalty: 40,
			    stock: 0,
				gethim: 10,
				name: "小天使",
				sex :"female",
				situation: "unemployed",
				graduateUniversity:"武汉大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("呵呵～～!");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("呵哈～～\n 科研中心新的科技项目已经可以使用了");
			    		alert("获得技能—医学，德语");
			    		kang.ability.doctor = true;
			    		kang.ability.DE = true;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var ZC={
				ID: "C",
				label1: "医学",
				label2: "英语",
				label3: "",
				salary: 7000,
			    loyalty: 90,
			    stock: 0,
				gethim: 5,
				name: "子纯",
				sex :"female",
				situation: "unemployed",
				graduateUniversity:"武汉大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("我本欲竭力相助，怎奈何，形式所迫～");
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("看在同乡情分。。。\n 获得含蓄而正直的手下，被警察发现的临界罪恶值下降了，洗白效率增加了");
			    		alert("获得技能—医学，英语");
			    		kang.employee.push(this);
			    		kang.ability.doctor = true;
			    		kang.ability.EN = true;
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var NS ={
				ID: "N",
				label1: "管理",
				label2: "英语",
				label3: "风华",
				salary: 15000,
			    loyalty: 60,
			    stock: 0,
				gethim: 20,
				name: "女神",
				sex :"female",
				situation: "unemployed",
				graduateUniversity:"中国科学与技术大学",
				BeEmployee: function(){
			    	if( (kang.stock < this.gethim) && (kang.fashion < 80)){
			    		alert("走过你旁边时，她闭上眼睛，堵上耳朵，捏住鼻子，很明显，她不想和你处于同一个三维空间～");
			    		return 0;
			    	}

			    	if( (kang.stock < this.gethim) && (kang.fashion > 80)){
			    		alert("她说：“虚有其表～”并把你的工资传单撕了 ");
			    		return 0;
			    	}
			    	
			    	if( (kang.stock > this.gethim) && (kang.fashion < 80)){
			    		alert("她看了看你的工资传单，但是没看你本人哪怕一眼");
			    		return 0;
			    	}

			    	if( (kang.stock > this.gethim) && (kang.fashion > 80)){{
			    		alert(" 她只说了一个字，“好”\n 获得女神属性‘风华’，所有员工的忠诚度大幅增加\n自身时髦度自动补满，每周结束后心情不再自动减少 ");
			    		kang.fashion = 100;
			    		alert("获得技能—管理，英语");
						kang.employee.push(this);
						this.situation = "employed";
						kang.stock -= this.gethim;
			    		kang.ability.governpoint++;
			    		kang.ability.EN = true;
			    		Refresh(property);
			    		return 1;
			    	}

			    }
			}}

			var QK ={
				ID: "Q",
				label1: "工程",
				label2: "英姿",
				label3: "日语",
				salary: 7000,
			    loyalty: 50,
			    stock: 0,
				gethim: 15,
				name: "秋裤",
				sex :"male",
				situation: "unemployed",
				graduateUniversity:"浙江大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("穷狗，吃我一脚！\n健康值-5");
			    		kang.health -= 5;
			    		Refresh(property);
			    		return 0;
			    	}

			    	if(kang.fashion < 80){
			    		alert("不好意思，这家秋裤厂不欢迎衣冠不整者！");
			    	}
			    	
			    	if(kang.stock >= this.gethim && kang.fashion >= 80){
			    		alert("同性不为后代，康哥为我真爱～\n获得秋裤一条，罪恶值增加，健康值降低，疲劳值增加\n 会所里可以开发新项目了！");
			    		alert("获得技能—工程，日语，英姿");
			    		if(kang.ability.malehooker == 1){
			    			kang.ability.malehooker = 3;
			    		}
			    		
			    		if(kang.ability.malehooker== 0){
			    			kang.ability.malehooker = 2;
			    		}
			    		kang.ability.certificate = true;
			    		kang.ability.JP = true;
			    		kang.guilty += 10;
			    		kang.health -= 10;
			    		kang.fatigue += 10;
			    		kang.stock +=20;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		Refresh(property);
			    		return 1;
			    	}
			    }
			}

			var DP ={
				ID: "P",
				label1: "工程",
				label2: "管理",
				label3: "卧底",
				salary: 10000,
			    loyalty: 30,
			    stock: 0,
				gethim: 15,
				name: "大庞",
				sex :"female",
				situation: "unemployed",
				graduateUniversity:"浙江大学",
				BeEmployee: function(){
			    	if(kang.stock < this.gethim){
			    		alert("哼，看到我手里的刀了么\n罪恶值-5");
			    		kang.guilty -= 5;
			    		Refresh(property);
			    		return 0;
			    	}
			    	
			    	else{
			    		alert("康哥在上，愿效犬马之劳～\n获得警察的卧底一枚，若能成功收买她，会降低被警察抓获的几率，反之被抓获的几率会上升\n ");
			    		kang.guilty += 10;
			    		kang.health -= 10;
			    		kang.fatigue += 10;
			    		kang.stock +=20;
			    		kang.employee.push(this);
			    		this.situation = "employed";
			    		kang.stock -= this.gethim;
			    		return 1;
			    	}
			    }
			}

///刷新函数，每次点击事件后调用此函数以记录游戏经行时间并触发相应事件与结局
			function Refresh(property) {
            var i = 0;
           
            time++;
			    ///三次操作后进入下一天
            if (time == 4){
                time = 1; relativetime++;
                alert("匆匆忙忙一天就过去了，创业之路一定是艰辛的，睡个好觉吧，晚安！(～￣▽￣)～");
                alert("早上起来打开窗，心情美美哒，新的一天加油哦！ヾ(◍°∇°◍)ﾉﾞ");
            }
			    ///根据现有属性值给出下一操作的提示
            if (kang.health >= 1 && kang.wealth > 5000 && control_1 == 0){
                alert("赚取了这么多钱已经很了不起了，不过或许你可以再加把油赚更多的钱来创建自己的公司"); control_1 = 1;
            }
            if (kang.health >= 1 && kang.wealth >= 10000 && control_2 == 0){
                alert("马化腾☺：阿云啊，你那个新搞的阿里云怎么样了？我最近正准备开一个新公司搞点外快，现在英雄联盟没人买皮肤了\n马云☺：啊，你说那个啊，马兄啊，那玩意贼赚钱");
                alert("你转身一看是马化腾，你刚想上去让他把你的皮肤钱给退了，他们就推开你走进了马路对面的五星级酒店\n你很生气但又无奈，你下定决心开一家自己的公司，有一天与他们谈笑风生！"); control_2 = 1;
                alert("系统提示：\n你现在已经可以创建自己的公司了，快去试试吧！");
            }
            if (kang.employee.length == 1&&control_5==0){
                alert("你：实不相瞒，这公司就是你我两个人\n新人：黑人问号脸.jpg 那我是二号员工？？？\n你：理论上是的\n新人：康总我看你有马化腾的命！");
                alert("系统提示：\n现在你已经有了自己的员工，根据员工的技能开发新的技术吧！");
                control_5 = 1;
            }
            if (kang.wealth >= 100000 && kang.ability.internet) alert("流氓：康总，听说最近王欣大哥出来了，他是我的偶像，要不我们拉他入伙？\n你：？？？还是算了吧，我们公司不做播放器\n流氓：。。。。");
            if (kang.wealth > 300000 && kang.ability.economic){
                alert("好鳖：康总您看，我们的公司也小有规模了，资金也充足了，再说我自从来了咋们公司一直管公司分发，我这金融本领也没地方用啊，不如你就拨点资金我去玩玩股票？\n你：这个。。鳖啊也确实太屈才了，那你就拿这10万练练？"); alert("好鳖：老板一个好消息一个坏。。\n你：收声！");
            }
			    ///在游戏中显示游戏时间
            var timeboard = document.getElementsByClassName("real")[0];
            timeboard.innerText = '第' + relativetime + '天' + "\n" + '第' + parseInt(relativetime / 7) + '周';
            if (kang.employee.length > 0) {
                ///时间过了七天触发每周事件
                if (relativetime % 7 == 0) {
        		if(kang.tech.high) kang.health -=5;
        		if(kang.tech.protection) kang.health +=5;
        		if(!kang.tech.launder) kang.guilty += 8;
        		alert("新的一周过去了，公司业务收入了"+ kang.sum);
        		kang.wealth += kang.sum;
				kang.stock += 3;

        		if(!kang.ability.happy){
        			alert("一周劳累，苦不堪言，心情-20，疲劳+20");
        			kang.ability.spirit -=20;
        			kang.ability.fatigue +=20;
        		}

        		else if(kang.ability.happy){
        			alert("WW带飞，体感爆表，心情+5，疲劳不变");
        			kang.spirit+=5;
        		}

                    if (kang.tech.drug) {
                        alert("由于你贩卖毒品，神人共愤，罪恶值翻倍！"); kang.guilty *= 2;
                    }
        		if(!kang.ability.beauty) {
        			alert("长期工作，人心涣散，员工忠诚度普遍下降了3点") ;
        			for (var i = kang.employee.length - 1; i >= 0; i--) {
        				kang.employee[i].loyalty - 3;
        			}}
        		if(kang.ability.beauty) alert("自从女神加入了本公司，康总惊奇的发现，男员工居然要求周末加班，忠诚度维持不变");

        		for (var i = kang.employee.length - 1; i >= 0; i--) {
        			if(kang.employee[i].name == "大庞"){
        				if(kang.employee[i].loyalty >=50) spy=0;
        				if(kang.employee[i].loyalty >=80) spy=(-0.1);
        			}
        		}

        		if(kang.ability.antiLawLevel == 2 ){
        			if(Math.random() < (possibility1 + spy)) {
        				alert("警察突击，措手不及，被抓现行，罚款一万");
        				kang.wealth -=10000;
        		}}

        		if(kang.ability.antiLawLevel == 3){
        			if(Math.random() < (possibility2 + spy)) {
        				alert("扫黄大队势如疾风，闯入公司，CEO被警方带走吊销执照，失去'管理'能力，并被重罚30000快");
        				kang.wealth -=30000;
        				kang.ability.governpoint--;
        		}}

        		if(kang.ability.antiLawLevel == 4 && kang.tech.drug){
        			if(Math.random() < (possibility3 + spy)) {
        				alert("今晚的新闻联播主题是——毒枭李某康反抗缉毒警察，被当场击毙，其手下的几名员工也被逮捕，对于李某康的罪行供认不讳");
        				alert("华中大校园之声：昔日校友好才俊，今日毒枭李某康，诸位同学戒之！戒之！");
                        alert("game_____over");reload(false);
                    }
                }

        	}
        	}
			    ///限定健康值上限并判断是否达到游戏结束条件
		  	if(kang.health > 100) kang.health = 100;
		  	else if(kang.health < 1) {
		  		alert("康哥创业未半，而中道崩崒\n-------game over-------");
                    reload(false);
            }
		  	

			    ///限定心情值上限，并在过低时给出提醒
		  	if(kang.spirit > 100) kang.spirit = 100;
		  	else if(kang.spirit < 10) {
		  		alert("神他么的烦，工作是不可能工作的～\n");
		  		able = false; 
		  	}
		  	

			    ///限定时髦值上限
		  	if(kang.fashion > 100) kang.fashion = 100;
		  	else if(kang.fashion < 1) {
		  		kang.fashion = 0;
		  	}
		  	

			    ///限定疲劳值上限并判断是否达到游戏结束条件
		  	if(kang.fatigue < 1) {
		  		kang.fatigue = 0;
		  	}
		  	else if(kang.fatigue > 100) {
		  		alert("累到肾爆！健康崩溃");
		  		kang.fatigue = 100;
		  		kang.health -= 30;
		  	}
		  	kang.health -= parseInt(kang.fatigue * 0.05);
		  	property[6].innerText = kang.fatigue;

			    ///限定罪恶值上限并判断犯罪等级
		  	if(kang.guilty > 100) {
		  		kang.guilty = 100;
		  		antiLawLevel = 4;
		  	}

		  	if( (kang.guilty >= 80) && (kang.guilty < 100) ) {
                    antiLawLevel = 3;
                    if (relativetime % 7 == 0 && time == 2) alert("你已进入恶贯满盈，无所不为的境界，社会主义已经不需要你这样的人了\n罪恶值爆棚");		  
		  	}


		  	if((kang.guilty >= 40) && (kang.guilty < 80)) {
		  		antiLawLevel = 2;
                    if (relativetime % 7 == 0 && time == 2)alert("你的所作所为已经偏离社会主义越来越远了\n罪恶值太多啦");		  
		  	}


		  	if((kang.guilty >=20) && (kang.guilty < 40)) {
		  		antiLawLevel = 1;
                    if (relativetime % 7 == 0 && time == 2)alert("你已经被警察盯上了，连马桶里都有摄像头\n你是不是积累太多罪恶值了");		  
		  	}


		  	if(kang.guilty < 10) {
		  	   kang.antiLawLevel = 0;
                }
             ///显示属性值
            property[0].innerText = kang.name;
            property[1].innerText = kang.label;
            property[2].innerText = kang.wealth;
            property[3].innerText = kang.health;
            property[4].innerText = kang.spirit;
            property[5].innerText = kang.fashion;
            property[6].innerText = kang.fatigue;
		  	property[7].innerText = kang.guilty;
		  	property[8].innerText = kang.numOfBussiness;
            property[9].innerText = kang.stock;
          
			    ///显示已雇佣名单
		  	for (var i = kang.employee.length - 1; i >= 0 ; i--) {
		  	        property[10 + i].innerText = kang.employee[i].name;
            }
                ///洗白后开始游戏结束倒计时
            if (kang.justice > 0) {
                finaltime--;
                if (kang.justice == 1) {
                    alert("这是你第一次为公司洗白，同时又陷入深深的沉思，现在公司已经在一条道上走到黑了，现在还可以洗白以后做大了可怎么办啊，或许我刚开始做业务的时候就应该谨慎一点的。。不过看着自己公司的记录从电脑里面清除，你又松了一口气，走着看吧"); alert("系统提示：或许你可以多洗白几次，有惊喜哟！");
                }
            }
			    ///倒计时结束后根据属性值判断游戏结局
            if(finaltime <= 0){
        	if(kang.wealth > 1050000) alert("恭喜康哥现代科技金融一体化发展股份有限公司董事长李睿康获得‘首席富豪企业家’称号！");
        	else{alert("恭喜华中控股公司董事长zz获得‘首席富豪企业家’称号！");}
        	if(kang.guilty > 95) alert("恭喜康哥现代科技金融一体化发展股份有限公司董事长李睿康获得‘首席恶棍企业家’称号！");
        	else{alert("感谢光谷光电商业资本公司董事长鱼贩获得‘首席恶棍企业家’称号！");}
        	if((kang.wealth > 1050000)&&(kang.guilty > 95)) {
        		alert("时代发展的先锋，中国创业的灵魂，世界创新的脊柱，人类生活的未来，这一切，都是他和他的公司所作所为！");
        		alert("’恰青年才俊，百万资本，意气风发，是个混球‘资本家恶棍比拼大赛的冠军是————康哥现代科技金融一体化发展股份有限公司董事长，李睿康！！！");
        	}
			if(kang.wealth < 1000) alert("刚才的你敢信？有没有钱心里没点x数吗？");
        	alert("game_____over");
        	reload(false);
            }
		    }


		    var screen = document.getElementsByClassName("screen")[0];
		    var menubox = document.getElementsByClassName("menubox")[0];
		    var showbox = document.getElementsByClassName("showbox")[0];
		    var property = screen.children;
		    Refresh(property);
            var div1 = document.getElementById("div1");
            var div2 = document.getElementById("div2");
            var div3 = document.getElementById("div3");
            var div4 = document.getElementById("div4");
            var div5 = document.getElementById("div5");
            var div6 = document.getElementById("div6");
            var div7 = document.getElementById("div7");
            var div8 = document.getElementById("div8");
            var div9 = document.getElementById("div9");
  

///点击按钮“人才中心”触发事件
           div1.addEventListener('mousedown',function Menu(){
            ///根据页面层数与点击次数判断目录的开关
        if((!(mousecounter%2))&&(flag==0)){
	    var menu = document.createElement('menu');
        menubox.appendChild(menu);
		function Getitem(item,name){
		  	menu.appendChild(item);
		  	item.innerText = name;
		  	item.style.width = "100px";
		  	item.style.height = "38px";
		  	item.style.marginLeft = "25px";
		  	item.style.marginTop = "20px";
		}

            ///点击员工按钮后显示员工具体信息
		function Showitem(imformation){
		  	  if(!(excounter%2)){
		  	  	var interview = document.createElement("interview");
		  	  	showbox.appendChild(interview);
		  	  	interview.style.width = "170px";
		  	  	interview.style.border = "3px soild black";
		  	  	interview.style.borderRadius = "10px";
		  	    interview.style.height = "220px";
		  	  	interview.style.position = "absoulte";
		  	  	interview.style.backgroundImage = "url(textback.png)";
		  	  	interview.style.backgroundSize = "100% 100%";
		  	  	interview.innerText =  imformation.name + "\n" + "技能1:"+ imformation.label1 + "\n" +"技能2:"+ imformation.label2 
		  	  	+ "\n" + "技能3:"+ imformation.label3 + "\n" + "薪酬:" + imformation.salary+ "\n" + "招募所需股份:" + imformation.gethim
		  	  	+"\n"+ "忠诚度:" + imformation.loyalty +"\n"+ "毕业院校:"+ imformation.graduateUniversity ;
		  	  	interview.style.display = "block";
		  	  	excounter++;
		  	  	flag = 2;

		  	  	var employeegeter = document.createElement("button");
		  	  	interview.appendChild(employeegeter);
		  	  	employeegeter.innerText = "为我卖命";
		  	  	employeegeter.style.fontSize = "20px";
		  	  	employeegeter.style.marginLeft = "20%";
		  	  	employeegeter.style.borderRadius = "10px";
		  	  	employeegeter.style.marginTop = "9px";
		  	  	employeegeter.style.border = "1px soild black";
		  	  	employeegeter.onclick = function(event){
		  	  		event.stopPropagation();
		  	  		var offer = imformation.BeEmployee();

		  	  		if(offer){
		  	  			showbox.removeChild(interview);
		  	  			menubox.removeChild(menu);
		  	  			mousecounter= excounter= flag = 0;
		  	  			Refresh(property);
		  	  		}
		  	  	}

		  	  }

		  	      ///点击两次后退回上一级目录
		  	 else if(excounter%2){
		  	 var finder = document.getElementsByTagName("interview")[0];
		  	 showbox.removeChild(finder);
		  	 excounter++;
		  	 flag = 1;
		  	 }
		}

            ///判断各个员工状态，显示未雇佣员工
        if(LM.situation == "unemployed"){
            var itemLM = document.createElement('button');
            Getitem(itemLM,"流氓");
            itemLM.onclick = function (event){
            	event.stopPropagation();
            	Showitem(LM);
            }
        }
        if(JG.situation == "unemployed"){
		  	var itemJG = document.createElement('button');
		  	Getitem(itemJG,"好圆");
		  	itemJG.onclick = function (event){
            	event.stopPropagation();
            	Showitem(JG);
            }
        }
        if(ZW.situation == "unemployed"){
		  	var itemZW = document.createElement('button');
		  	Getitem(itemZW,"紫薇");
		  	itemZW.onclick = function (event){
            	event.stopPropagation();
            	Showitem(ZW);
            }
        }
        if(HB.situation == "unemployed"){
		  	var itemHB = document.createElement('button');
		  	Getitem(itemHB,"好鳖");
		  	itemHB.onclick = function (event){
            	event.stopPropagation();
            	Showitem(HB);
            }
        }
        if(WW.situation == "unemployed"){
		  	var itemWW = document.createElement('button');
		  	Getitem(itemWW,"闻威");
		  	itemWW.onclick = function (event){
            	event.stopPropagation();
            	Showitem(WW);
            }  
        }
        if(DY.situation == "unemployed"){
		  	var itemDY = document.createElement('button');
		  	Getitem(itemDY,"小兑");
		  	itemDY.onclick = function (event){
            	event.stopPropagation();
            	Showitem(DY);
            }
        }
        if(TS.situation == "unemployed"){
		  	var itemTS = document.createElement('button');
		  	Getitem(itemTS,"小天使");
		  	itemTS.onclick = function (event){
            	event.stopPropagation();
            	Showitem(TS);
            }
        }
        if(ZC.situation == "unemployed"){
		  	var itemZC = document.createElement('button');
		  	Getitem(itemZC,"子纯");
		  	itemZC.onclick = function (event){
            	event.stopPropagation();
            	Showitem(ZC);
            }
        }
        if(NS.situation == "unemployed"){
		  	var itemNS = document.createElement('button');
		  	Getitem(itemNS,"女神");
		  	itemNS.onclick = function (event){
            	event.stopPropagation();
            	Showitem(NS);
            }
        }
        if(QK.situation == "unemployed"){
		  	var itemQK = document.createElement('button');
		  	Getitem(itemQK,"秋裤");
		  	itemQK.onclick = function (event){
            	event.stopPropagation();
            	Showitem(QK);
            }
        }
        if(DP.situation == "unemployed"){
		  	var itemDP = document.createElement('button');
		  	Getitem(itemDP,"大庞");
		  	itemDP.onclick = function (event){
            	event.stopPropagation();
            	Showitem(DP);
            }
        }  
		  	menu.style.width = "150px";
		  	menu.style.height = "650px";
		  	menu.style.position = "absoulte";
		  	menu.style.background = "white";
		  	menu.style.border = "2px solid black";
		  	menu.style.borderRadius= "50px";
		  	mousecounter ++;
		  	flag = 1;
		  }
        else if((mousecounter %2) && (flag == 1)){
		  	var seeker = document.getElementsByTagName("menu")[0];
		  	menubox.removeChild(seeker);
		  	mousecounter++;
		  	flag = 0;
		}


	        if(flag == 2){
			mousecounter = 0;
			excounter = 0;
			flag = 0;
			var finder2 = document.getElementsByTagName("interview")[0];
		  	showbox.removeChild(finder2);
		  	var seeker2 = document.getElementsByTagName("menu")[0];
		  	menubox.removeChild(seeker2);
		  } //招募人才
},false);                                     
            
///点击按钮“会所”触发事件
           div2.addEventListener('mousedown',function Menu(){
 function Getitem2(item,name){
		  	menu.appendChild(item);
		  	item.innerText = name;
		  	item.style.width = "100px";
		  	item.style.height = "38px";
		  	item.style.marginLeft = "25px";
		  	item.style.marginTop = "20px";
		}  // 娱乐

if( (!(mousecounter%2)) && (flag==0) ){
    var menu = document.createElement('menu');
    menubox.appendChild(menu);
    menu.style.width = "150px";
	menu.style.height = "650px";
    menu.style.position = "absoulte";
    menu.style.background = "white";
	menu.style.border = "2px solid black";
	menu.style.borderRadius= "50px";
    var footbath = document.createElement('button');
    var perm = document.createElement('button');
    var somkecigar = document.createElement('button');
    var somkezhonghua = document.createElement('button');
    var smokedqm = document.createElement('button');
    var malehooker = document.createElement('button');

    Getitem2(footbath,"洗脚");
    Getitem2(perm,"烫头");
    Getitem2(somkecigar,"抽雪茄");
    Getitem2(somkezhonghua,"抽中华");
    Getitem2(smokedqm,"抽大前门");
    Getitem2(malehooker,"经营夜总会");

    footbath.onclick = function (event){
    event.stopPropagation();
    if(kang.wealth < 200){alert("你说你，连洗jio的钱都没得，混个鸡毛？");}
    else{
    kang.entertainment("洗脚");
    Refresh(property);
        }    
    }

    perm.onclick = function (event){
    event.stopPropagation();
     if(kang.wealth < 100){alert("你说你，连烫头的钱都没得，混个鸡毛？");}
    else{
    kang.entertainment("烫头");
    Refresh(property);}
    }

    somkecigar.onclick = function (event){
    event.stopPropagation();
    if(kang.wealth < 100){alert("你说你，连抽烟的钱都没得，混个鸡毛？");}
    else{
    kang.smoking("雪茄");
    Refresh(property);
    }}

    somkezhonghua.onclick = function (event){
    event.stopPropagation();
     if(kang.wealth < 50){alert("你说你，连抽烟的钱都没得，混个鸡毛？");}
    else{
    kang.smoking("中华");
    Refresh(property);
    }}

    smokedqm.onclick = function (event){
    event.stopPropagation();
     if(kang.wealth < 10){alert("看起来你已经穷到了一种境界。。。");}
    else{
    kang.smoking("大前门");
    Refresh(property);
    }}

    malehooker.onclick = function(event){
    	event.stopPropagation();
    	switch(kang.ability.malehooker){
    		case 0: 
    		alert("女主顾都喜欢鲜肉，我们存货不足，拉不到顾客啊！");
    		break;
    		case 1:
    		alert("丁悦凭借其英俊的外貌和出色的手感，赢得了众多富婆的包养，随后，公司与丁悦里应外合，靠销售高价酒吃回扣，骗到了很多富婆的钱");
    		alert("财富+8000，罪恶值+10");
    		kang.wealth += 8000;
    		kang.guilty +=10;
    		Refresh(property);
    		break;
    		case 2:
    		alert("作为新一代鲜肉的代表，秋裤凭借’樱花男子‘的艺名，成功出道并且举办了大型的观众互动会，公司乘机抱紧这颗摇钱树，秋裤在妹子身上的一个签名就可以卖出100快");
    	    alert("虽然有炒作弄虚作假之嫌，但是公司大发横财，财富+5000，罪恶值+5");
    	    kang.wealth +=5000;
    	    kang.guilty +=5;
    	    Refresh(property);
    	    break;
    	    case 3:
    	    alert("丁悦秋裤两位优秀的艺人展开了一场双人秀，全场座无虚席，下至少女上到富婆都在为他们欢呼砸钱，最后店主康哥也亲自登台表演，惊艳四座");
    	    alert("这一夜，公司创造了这一行的记录，收入15000元，但是狂热的观众也对于三位主角抓住不放，场面一度十分混乱，最终警察出动来维持治安");
    	    alert("为了公司的主体不被警察发现，康哥毅然下令袭警，导致众多警察被砸出脑震荡，罪恶值+15");
    	    kang.wealth +=15000;
    	    kang.guilty +=15;
    	    Refresh(property);
    	    break;
    	}
    }

    flag = 1;
    mousecounter ++;
}
else if (mousecounter%2 && flag == 1){
		 var search = document.getElementsByTagName("menu")[0];
		 menubox.removeChild(search);
		 mousecounter++;
		 flag = 0;}
},false);


///点击按钮“创业基地”触发事件
          div3.addEventListener('mousedown',function Menu(){
if( (!(mousecounter%2)) && (flag==0) ){
  var menu = document.createElement('menu');
    menubox.appendChild(menu);
    menu.style.width = "150px";
	menu.style.height = "650px";
    menu.style.position = "absoulte";
    menu.style.background = "white";
	menu.style.border = "2px solid black";
	menu.style.borderRadius= "50px";
    var company = document.createElement('button');
    var praise = document.createElement('button');
    menu.appendChild(company);
		  	company.innerText = "建立新公司";
		  	company.style.width = "100px";
		  	company.style.height = "38px";
		  	company.style.marginLeft = "25px";
		  	company.style.marginTop = "20px";
	        menu.appendChild(praise);
		    praise.innerText = "奖励员工";
		    praise.style.width = "100px";
		  	praise.style.height = "38px";
		  	praise.style.marginLeft = "25px"; 
		  	praise.style.marginTop = "20px";

    company.onclick = function (event){
    event.stopPropagation();

    var newcompany = new Enterprise();
    newcompany.SetNewCompany();
    Refresh(property);
    }

    praise.onclick = function (event){
    	if(kang.employee.length == 0){alert("压根没有员工啊。。。");}
else{
	if(kang.wealth < 1000) alert("别傻逼了，你连自己都喂不饱，还来搞奖励——");
    else{
		kang.wealth -= 1000;
		for (var i = kang.employee.length - 1; i >= 0; i--) {
			kang.employee[i].loyalty +=10;
		}
		alert("我等虽肝脑涂地，也要报答康哥的大恩！");
		flag = 1;
        Refresh(property);
            }
        }
	}
	flag = 1;
    mousecounter ++;
    }
else if(mousecounter%2 && flag == 1){
		 var search = document.getElementsByTagName("menu")[0];
		 menubox.removeChild(search);
		 mousecounter++;
		 flag = 0;}
},false);



///点击按钮“黑市”触发事件
          div4.addEventListener('mousedown',function Menu(){
 function Getitem4(item,name){
		  	menu.appendChild(item);
		  	item.innerText = name;
		  	item.style.width = "100px";
		  	item.style.height = "38px";
		  	item.style.marginLeft = "25px";
		  	item.style.marginTop = "20px";
		}
if( (!(mousecounter%2)) && (flag==0) ){
    var menu = document.createElement('menu');
    menubox.appendChild(menu);
    menu.style.width = "150px";
	menu.style.height = "650px";
    menu.style.position = "absoulte";
    menu.style.background = "white";
	menu.style.border = "2px solid black";
	menu.style.borderRadius= "50px";
    var Japan = document.createElement('button');
    var England = document.createElement('button');
    var Deutschland = document.createElement('button');
    
    Getitem4(Japan,"日本业务拓展");
    Getitem4(England,"英美市场探索");
    Getitem4(Deutschland,"德国产业调查");
    
    Japan.onclick = function (event){
    event.stopPropagation();
    if(! kang.ability.JP) alert("建议你找一个懂日语的人来帮你");
    else{
    	kang.wealth -= 15000;
    	for (var i = kang.business.length - 1; i >= 0; i--) {
    		kang.business[i].input *= 2;
    	}

    	alert("あおいそら、さくら、セイバー等三位日籍员工已经决定参与我们的线上服务");
    	Refresh(property);
    }
    }

    England.onclick = function (event){
    event.stopPropagation();
    if(! kang.ability.EN) alert("建议你找一个懂英语的人来帮你");
    else{
    	kang.wealth -= 15000;
    	for (var i = kang.business.length - 1; i >= 0; i--) {
    		kang.business[i].input *= 2;
    	}
    	alert("Keira Knightley，Scarlett Johansson，Billy Herrington等三名英美籍员工已经决定参与我们的同城交友服务");
    	Refresh(property);
    }
    }

    Deutschland.onclick = function (event){
    event.stopPropagation();
    if(! kang.ability.DE) alert("建议你找一个懂德语的人来帮你");
    else{
    	kang.wealth -= 15000;
    	for (var i = kang.business.length - 1; i >= 0; i--) {
    		kang.business[i].input *= 2;
    	}
    	alert("Martina Hill，Diane Kruger，Taylor Swift等三名德意志籍员工已经决定参与我们的跨国文化交流服务");
    	Refresh(property);
    }
    } 
    flag = 1;
    mousecounter ++;
}
else if ( (mousecounter%2)  && (flag == 1)){
		 var search = document.getElementsByTagName("menu")[0];
		 menubox.removeChild(search);
		 mousecounter++;
		 flag = 0;}
},false);


///点击按钮“警察局”触发事件
          div5.addEventListener('mousedown',function Menu(){
 function Getitem5(item,name){
		  	menu.appendChild(item);
		  	item.innerText = name;
		  	item.style.width = "100px";
		  	item.style.height = "38px";
		  	item.style.marginLeft = "25px";
		  	item.style.marginTop = "20px";
		}
if( (!(mousecounter%2)) && (flag==0) ){
    var menu = document.createElement('menu');
    menubox.appendChild(menu);
    menu.style.width = "150px";
	menu.style.height = "650px";
    menu.style.position = "absoulte";
    menu.style.background = "white";
	menu.style.border = "2px solid black";
	menu.style.borderRadius= "50px";
    var bribe = document.createElement('button');
    var justify = document.createElement('button');
    
    
    Getitem5(bribe,"行贿");
    Getitem5(justify,"洗白");
  
    
    bribe.onclick = function (event){
    event.stopPropagation();
    if(! kang.ability.lawbreak) alert("领导都是一些清廉高洁的人民公仆，怎么会收取你这奸商的不义之财？");
    else{
    	kang.wealth -= 8000;
    	kang.guilty -= 30;
        alert("嘿嘿，我们政府和商界之间就是要多多配合才行，有了康老板这样的有识之士，本市gdp的腾飞指日可待\n财富-8000，罪恶值-30"); 
        if (control_4 == 0) {
            alert("这时祁厅长凑到你耳边说，康老板今天咋们就算是朋友了，以后有什么需要帮忙的就开口，另外我看贵公司做到业务都有点。。。。哈哈哈哈我看康总都明白，你可以帮你公司洗白一下吗，从前我们局里的记录都一笔购销，也方便康总你日后赚钱嘛");
            alert("你看着祁厅长想，这小子真贼啊，嘴上附和到，那是肯定的，说着你们朝着山水山庄走去，迎接你们的是山水集团的老总高小琴，你一边感叹别人年轻有为，一边想这个人我好像在哪看过。饭后高总说要带你学学英语，你纳闷婉拒道，我英语过六级了，不用了高总。");
            control_4 = 1;}Refresh(property);
    	}
 
    }


   justify.onclick = function (event)
    {
       event.stopPropagation();
       if (kang.business.length < 1) alert("连公司都没有，洗毛啊。。");
       if (kang.wealth < 20000) alert("没钱啊兄dei！");
    else{
    if((kang.antiLawLevel > 1)&&(kang.justice < 3)){alert("老板您看，您身上还有案子，是不是应该先处理一下？");}

    if((kang.antiLawLevel < 2) && (kang.justice < 3)){
    	kang.wealth -= 20000;
    	kang.justice += 1;
    	for (var i = kang.business.length - 1; i >= 0; i--) {
    		kang.business[i].input -= 2000;
    	}
    	alert("本公司已经成功的将一部分财产转移到电气，银行等传统行业，部分员工已经被遣散回家\n分发安置费，财富-20000，每个公司的收入-2000");
    	 Refresh(property);
    }

    if(kang.justice == 3){
    	alert("本公司已经更名为’康哥现代科技金融一体化发展股份有限公司‘，从现在起即使罪恶值增加也不会招致警察的搜查行动");
    	alert("公司老板康总已经被提名参加了一个月后的’恰青年才俊，百万资本，意气风发，是个混球‘资本家恶棍比拼大赛");
    	alert("其他几位主要的参赛对手是——鱼贩，光谷光电商业资本公司，市值88万，罪恶值95\n四环，街道口商圈总部，市值105万，罪恶值85\n 四维, 武汉电网，市值120万，罪恶值75\n ZZ, 华中控股，市值150万，罪恶值60");
    	alert("尽可能的去提升自己的罪恶值和财富值吧！"); 
    	Refresh(property);
    }	
    }
}   
    flag = 1;
    mousecounter ++;
}
else if ((mousecounter%2)  && (flag == 1)){
		 var search = document.getElementsByTagName("menu")[0];
		 menubox.removeChild(search);
		 mousecounter++;
		 flag = 0;}
		},false);


///点击按钮“劳务市场”触发事件
          div6.addEventListener('mousedown',function Menu(){
 function Getitem6(item,name){
		  	menu.appendChild(item);
		  	item.innerText = name;
		  	item.style.width = "100px";
		  	item.style.height = "38px";
		  	item.style.marginLeft = "25px";
		  	item.style.marginTop = "20px";
		}
if( (!(mousecounter%2)) && (flag==0) ){
    var menu = document.createElement('menu');
    menubox.appendChild(menu);
    menu.style.width = "150px";
	menu.style.height = "650px";
    menu.style.position = "absoulte";
    menu.style.background = "white";
	menu.style.border = "2px solid black";
	menu.style.borderRadius= "50px";

    var brick = document.createElement('button');
    var hooker = document.createElement('button');
    var trainee = document.createElement('button');
    var model = document.createElement('button');
    var sponsorship = document.createElement('button');

    Getitem6(brick,"搬砖");
    Getitem6(hooker,"出卖色相");
    Getitem6(trainee,"实习生");
    Getitem6(model,"写真模特");
    Getitem6(sponsorship, "拉赞助");

    brick.onclick = function (event){
    event.stopPropagation();
    kang.getMoney("搬砖");
    Refresh(property);
    }

    hooker.onclick = function (event){
    event.stopPropagation();
    kang.getMoney("出卖色相");
    Refresh(property);
    }

    trainee.onclick = function (event){
    event.stopPropagation();
    kang.getMoney("实习生");
    Refresh(property);
    }

    model.onclick = function (event){
    event.stopPropagation();
    kang.getMoney("写真模特");
    Refresh(property);
    }
    sponsorship.onclick = function (event) {
        event.stopPropagation();
        kang.getMoney("拉赞助");
        if (kang.numOfBussiness>0)
        Refresh(property);
    }

    flag = 1;
    mousecounter ++;
}
else if (mousecounter%2 && flag == 1){
		 var search = document.getElementsByTagName("menu")[0];
		 menubox.removeChild(search);
		 mousecounter++;
		 flag = 0;}
},false);

///点击按钮“基佬之家”触发事件
          div7.addEventListener('mousedown',function Menu(){
 function Getitem7(item,name){
		  	menu.appendChild(item);
		  	item.innerText = name;
		  	item.style.width = "100px";
		  	item.style.height = "38px";
		  	item.style.marginLeft = "25px";
		  	item.style.marginTop = "20px";
		}
if( (!(mousecounter%2)) && (flag==0) ){
    var menu = document.createElement('menu');
    menubox.appendChild(menu);
    menu.style.width = "150px";
	menu.style.height = "650px";
    menu.style.position = "absoulte";
    menu.style.background = "white";
	menu.style.border = "2px solid black";
	menu.style.borderRadius= "50px";

    var playlol = document.createElement('button');
    var jog = document.createElement('button');
    var buildup = document.createElement('button');
    var athome = document.createElement('button');
    Getitem7(playlol,"打LOL");
    Getitem7(jog,"跑步");
    Getitem7(buildup, "健身");
    Getitem7(athome, "宅在家");
   

    playlol.onclick = function (event){
    event.stopPropagation();
    kang.entertainment("打LOL");
    Refresh(property);
    }

    jog.onclick = function (event){
    event.stopPropagation();
    kang.exercise("jog");
    Refresh(property);
    }

    buildup.onclick = function (event){
    event.stopPropagation();
    kang.exercise("buildup");
    Refresh(property);
    }
    athome.onclick = function (event) {
        event.stopPropagation();
        kang.exercise("athome");
        Refresh(property);
    }

    flag = 1;
    mousecounter ++;
}

else if (mousecounter%2 && flag == 1){
		 var search = document.getElementsByTagName("menu")[0];
		 menubox.removeChild(search);
		 mousecounter++;
		 flag = 0;}
},false);


///点击按钮“科技研发部门”触发事件
          div8.addEventListener('mousedown',function Menu(){
 function Getitem8(item,name){
		  	menu.appendChild(item);
		  	item.innerText = name;
		  	item.style.width = "100px";
		  	item.style.height = "38px";
		  	item.style.marginLeft = "25px";
		  	item.style.marginTop = "20px";
		}

if( (!(mousecounter%2)) && (flag==0) ){
    var menu = document.createElement('menu');
    menubox.appendChild(menu);
    menu.style.width = "150px";
	menu.style.height = "650px";
    menu.style.position = "absoulte";
    menu.style.background = "white";
	menu.style.border = "2px solid black";
	menu.style.borderRadius= "50px";

    if (!kang.tech.high) {
        var enjoyablemedicine = document.createElement('button');
        Getitem8(enjoyablemedicine, "愉悦超high药品研发");
        enjoyablemedicine.onclick = function (event) {
            event.stopPropagation();
            if (kang.ability.doctor && kang.wealth >= 10000) {
                alert("介是你没有次过的船新药品，阔以让你high到倒立\n 财富-10000");
                kang.wealth -= 10000;
                kang.tech.high = true;
                alert("康哥带头服药，全场都在倒立蹦迪，沸腾到用钱当卫生纸，康哥每晚如此，大赚一笔");
                alert("每周健康值-5，每周收入翻倍");
                Refresh(property);
            }

            if (!kang.ability.doctor) {
                alert("或许你需要一个医药人才");
            }

            if (kang.wealth < 10000) {
                alert("或许你应该多搞一点钱");
            }
        }
    }


if(!kang.tech.protection){
	var helpfulmedicine = document.createElement('button');
	Getitem8(helpfulmedicine,"利身大补药品研发");
	helpfulmedicine.onclick = function (event){
    event.stopPropagation();
    if(kang.ability.doctor && kang.wealth >= 10000){
    	alert("介是你没有次过的船新药品，阔以让你聊发少年狂\n 财富-10000");
    	kang.wealth -= 10000 ;
    	kang.tech.protection = true;
    	alert("康哥带头服药，不仅强化了自己的身子，也满足了一些老顾客的需求");
    	alert("每周健康值+5，每周收入翻倍");	 
    	Refresh(property);
    }

    if(!kang.ability.doctor){
    	alert("或许你需要一个医药人才");	
    }

    if(kang.wealth< 10000){
    	alert("或许你应该多搞一点钱");	
    }
	}
}


if(!kang.tech.security){
    var security = document.createElement('button');
	Getitem8(security,"信息安全反制技术研发");
	security.onclick = function (event){
    event.stopPropagation();
    if(kang.ability.internet && kang.wealth >= 10000){
    	alert("介是你没有看过的船新密码，世盖上阔以看懂的不过10个人\n 财富-10000");
    	kang.wealth -= 10000 ;
    	kang.tech.security = true;
    	alert("获得超高的安保机制，警察偷袭概率大幅度降低，警察警戒极限值大幅度升高");
    	Refresh(property);
    }

    if(!kang.ability.internet){
    	alert("或许你需要一个计算机人才");	
    }

    if(kang.wealth< 10000){
    	alert("或许你应该多搞一点钱");	
    }
    }
}

if(!kang.tech.archtecture){
    var archtecture = document.createElement('button');
	Getitem8(archtecture,"建筑技术研发");
	archtecture.onclick = function (event){
    event.stopPropagation();
    if(kang.ability.certificate && kang.wealth >= 10000){
    	alert("介是你没有见过的船新建筑\n 财富-10000");
    	kang.wealth -= 10000 ;
    	kang.tech.archtecture = true;
    	alert("新公司的地基稳固性现在已经有了保证！");	
    	Refresh(property);
    }

    if(!kang.ability.certificate){
    	alert("或许你需要一个工程人才");	
    }

    if(kang.wealth< 10000){
    	alert("或许你应该多搞一点钱");	
    }
    }
}

if(!kang.tech.launder){
    var launder = document.createElement('button');
	Getitem8(launder,"洗钱技术研发");
	launder.onclick = function (event){
    event.stopPropagation();
    if(kang.ability.economic && kang.wealth >= 30000){
    	alert("介是你没有见过的船新洗钱方式\n 财富-30000");
    	kang.wealth -= 30000 ;
    	kang.tech.launder = true;
    	alert("每周获得收入的同时，罪恶值将不再增加！");	
    	Refresh(property);
    }

    if(!kang.ability.economic){
    	alert("或许你需要一个金融人才");	
    }

    if(kang.wealth< 30000){
    	alert("或许你应该多搞一点钱");	
    }
    }
}

if(!kang.tech.drug){
    var drug = document.createElement('button');
	Getitem8(drug,"毒品制作技术研发");
	drug.onclick = function (event){
    event.stopPropagation();

    if(kang.ability.doctor&& kang.ability.certificate && kang.wealth >= 30000){
    	alert("介是你没有见过的船新毒品，一口即阔上天\n 财富-30000");
    	kang.wealth -= 30000 ;
    	kang.tech.drug = true;
    	alert("你已经步入了人类历史上最暴利的行业，每周收入翻5倍，每周罪恶值强制翻倍！（洗钱不会阻挡此罪恶值的增加）");	
    	alert("你现在有了‘毒贩’性质，遇见警察时有被当场击毙的危险！请将罪恶值控制在较低的范围内！");
    	Refresh(property);
    }

    if(!kang.ability.certificate){
    	alert("或许你需要一个工程人才");	
    }

    if(!kang.ability.doctor){
    	alert("或许你需要需要一个医药人才");
    }

    if(kang.wealth< 30000){
    	alert("或许你应该多搞一点钱");	
    }
    }

}
flag = 1;
mousecounter ++;	
}

else if (mousecounter%2 && flag == 1){
	var search = document.getElementsByTagName("menu")[0];
	menubox.removeChild(search);
	mousecounter++;
	flag = 0;}
 
},false);
