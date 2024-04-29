import { addExtra, createList} from "./modules/banks-list.js"

class Bank {
    constructor(id, code, name, address, type, days, hours, bag, description, key, map, image, orderM, orderE) {
        this.id = id
        this.code = code
        this.name = name
        this.address = address
        this.type = type
        this.days = days
        this.hours = hours
        this.bag = bag
        this.description = description
        this.key = key
        this.map = map
        this.image = image
        this.orderM = orderM
        this.orderE = orderE
    }
}

const bpmCusani = new Bank(1, '', 'Bpm', 'Via Cusani, 4', 'CmRp', 'L-V', '15:30', 'di tela rossa','Uffici. Primo piano', false, 'https://www.google.com/maps/place/Via+Cusani,+4,+20121+Milano+MI/@45.4688517,9.18459,19z/data=!4m6!3m5!1s0x4786c14d4ba06ea7:0x4a9235dc30a7b826!8m2!3d45.4689631!4d9.1846044!16s%2Fg%2F11c2h0cbpj?authuser=1&entry=ttu','https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=e_U0zxh6-cKLFIFmaPQEfw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=4.0975285&pitch=0&thumbfov=100', 18, )
const bpmBonaparte = new Bank(2, '01323', 'Bpm', 'Foro Bonaparte, 24', 'Cont-M', 'L-V', '', 'di tela rossa','Uffici. Secondo piano. Ascensore dritto in fondo.', false, 'https://www.google.com/maps/place/Foro+Buonaparte,+24,+20121+Milano+MI/@45.4715413,9.1463708,14z/data=!3m1!4b1!4m6!3m5!1s0x4786c14cf5482e9f:0x4707c4c0b4fe3798!8m2!3d45.4715472!4d9.1832368!16s%2Fg%2F11c27v5syf?authuser=1&entry=ttu', '../img/intesa&bpm_bonaparte.png', 20, )
const caSanFedele = new Bank(3, '', 'Credit Agricole', 'Piazza San Fedele, 4', 'Cont-M', 'L-V', '', 'di plastica blu', 'Filiale. Portineria', false, 'https://www.google.com/maps/place/Cr%C3%A9dit+Agricole+Italia/@45.4660945,9.1908985,3a,75y/data=!3m8!1e2!3m6!1sAF1QipMCM0MT7xm-hLbZ9NTas-Jx0Z0CQHomi3WzKGWV!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMCM0MT7xm-hLbZ9NTas-Jx0Z0CQHomi3WzKGWV%3Dw203-h114-k-no!7i5312!8i2988!4m9!3m8!1s0x4786c7411f75273b:0xee01187ab23e603!8m2!3d45.4662658!4d9.1912042!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11j6j5pnln?authuser=1&entry=ttu', 'https://lh3.ggpht.com/p/AF1QipMCM0MT7xm-hLbZ9NTas-Jx0Z0CQHomi3WzKGWV=s512', 7, )
const alettiVenezia = new Bank(4, '01937', 'Banca Aletti', 'Corso Venezia, 46', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Uffici. Secondo Piano. Suonare il campanello.', false, 'https://www.google.com/maps/place/Corso+Venezia,+46,+20121+Milano+MI/@45.4725302,9.2008084,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6b930fc2df7:0x7ded9af34ed2247f!8m2!3d45.4725302!4d9.2033887!16s%2Fg%2F11c5kc6lk0?authuser=1&entry=ttu', '../img/aletti_venezia.png', 33, )
const bpmRovello = new Bank(5, '', 'Bpm', 'Via Rovello, 17', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Uffici. Piano terra. Campanello nº 55. Porta grande di legno dritto in fondo al cortile. Le buste da ritirare (se ci sono) stanno in una cassetta di plastica grigia su un mobiletto a metà del corridoio (a sinistra).', false, 'https://www.google.com/maps/place/Ravello+17/@45.4730203,9.1650044,15z/data=!4m11!1m3!11m2!2stUkR9m2R2mamaUNIr6fXckWpa3ke6A!3e3!3m6!1s0x4786c14d592ea8e5:0x7954345b628bc2b4!8m2!3d45.4681283!4d9.1838777!15sCgEq4AEA!16s%2Fg%2F11cs2wnpjh?authuser=1&entry=ttu', '../img/bpm_ravello.png', 19,)
const consuliaMonforte = new Bank(6, '', 'Consulia', 'Corso Monforte, 52/54', 'R', 'L-V', '16:30', '', 'Si entra dal 54 (angolo con Viale Bianca Maria). Lasciano 2 sacche grandi dietro la porta di servizio grigia, prima del patio sulla destra. Non prima delle 16:30.', false, 'https://www.google.com/maps/place/Banca+Consulia/@45.4676138,9.2025547,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6b2f1662785:0x9c634d1824fe6fdb!8m2!3d45.4676101!4d9.2051296!16s%2Fg%2F11c5s6kdrr?authuser=1&entry=ttu', '../img/consulia_monforte.png', '',  )
const credemAndegari = new Bank(7, '', 'Credem', 'Via Andegari, 14', 'Cont-M', 'L-V', '', 'di tela verde, normalmente 2.', 'Filiale. Appena superi le 2 porte di sicurezza, ufficio a sinistra della portineria.', false, 'https://www.google.com/maps/place/Credem+Banca/@45.4693178,9.1912339,17z/data=!4m14!1m7!3m6!1s0x4786c6b1870b147d:0x65cd642cb946fc07!2sCredem+Banca!8m2!3d45.4692681!4d9.1911894!16s%2Fg%2F12qgpddpj!3m5!1s0x4786c6b1870b147d:0x65cd642cb946fc07!8m2!3d45.4692681!4d9.1911894!16s%2Fg%2F12qgpddpj?authuser=1&entry=ttu', '../img/credem_andegari.png', 15 )
const credemMonforte = new Bank(8, '', 'Credem', 'Corso Monforte, 34', 'R', 'L-V', '16:30', '', 'Filiale. Prima porta a vetri a sinistra dopo l\'ingresso principale.', false, 'https://www.google.com/maps/place/Credem+Banca/@45.4672359,9.2002042,17z/data=!3m2!4b1!5s0x4786c6bcba95bbcf:0x86041f746e8a466b!4m6!3m5!1s0x4786c6bcbb4dbce9:0x60af9b6bf4309131!8m2!3d45.4672322!4d9.2027791!16s%2Fg%2F1v3klyx6?authuser=1&entry=ttu', '../img/credem_monforte.png', '', )
const dbProspero = new Bank(9, '', 'Deutsche Bank', 'Via S. Prospero, 2', 'Cont-M', 'L-V', '', 'di tela blu', 'Filiale. Dritto in fondo c\'è il tipo alla scrivania.', false, 'https://www.google.com/maps/place/Deutsche+Bank/@45.4661457,9.1835211,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6a8e04106d7:0xac2e4bebb93dc9cc!8m2!3d45.466142!4d9.186096!16s%2Fg%2F1hc667pxw?authuser=1&entry=ttu', '../https://lh5.googleusercontent.com/p/AF1QipMqSbfBjfyWO5rLcs1piWr47wcnp_hujl15BvpW=w426-h240-k-no', 3, )
const finecoGaribaldi = new Bank(10, '', 'Fineco', 'Corso Garibaldi, 86', 'Cont-P', 'L-V', '16:30', 'di plastica blu scuro', 'Uffici. Ingresso in galleria. Primo piano. Tipa alla reception.', false, 'https://www.google.com/maps/place/Fineco/@45.4774027,9.1821221,17z/data=!3m2!4b1!5s0x4786c14a78ce1bb3:0x436977b9f931a365!4m6!3m5!1s0x4786c14a7959c967:0x9a918ebfe3d35bd7!8m2!3d45.477399!4d9.184697!16s%2Fg%2F11c1nx3mg3?authuser=1&entry=ttu', '../img/fineco_garibaldi.png','', )
const generaliLiberty = new Bank(11, '', 'Generali', 'Piazzetta del Liberty', 'R', 'L-V', '15:00', 'di tela rosso bordeaux', 'Uffici. 4º piano. Esci dall\'ascensore vai a destra, tappeto rosso. Tipa alla reception.', false, 'https://www.google.com/maps/place/Piazza+del+Liberty,+2,+20121+Milano+MI/@45.4651849,9.1934723,19z/data=!3m1!4b1!4m6!3m5!1s0x4786c6af9870f6c3:0x4502964ef4f71325!8m2!3d45.465184!4d9.194116!16s%2Fg%2F11bw3ywfj8?authuser=1&entry=ttu', 'img/generali_liberty.png', 10)
const ifisBorghetto = new Bank(12, '', 'Banca Ifis', 'Via Borghetto, 5', 'R', 'L-V', '17:00', '', 'Uffici. Portineria.', false, 'https://www.google.com/maps/place/Banca+Ifis/@45.4727629,9.2021671,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c7584526d4b7:0xc207217ea40e80c0!8m2!3d45.4727592!4d9.204742!16s%2Fg%2F11g0h1hckz?authuser=1&entry=ttu', '../img/ifis_borghetto.png', '', )
const intesaFerrari = new Bank(13, '', 'Intesa Sanpaolo', 'Piazza Ferrari, 10', 'Cont-M', 'L-V', '', 'buste sciolte', 'Filiale. C\'è un campanello grigio su un paletto di fronte alla portineria, vicino alla porta a vetri. Lo suoni e vai verso i tornelli, ti viene incontro il tipo dall\'ufficio a destra dopo i tornelli. Nel dubbio chiedi in portineria.', false, 'https://www.google.com/maps/place/INTESA+SANPAOLO+S.P.A.+-+Bancomat/@45.4667544,9.1857013,17z/data=!3m2!4b1!5s0x4786c6ad90e99ee7:0x1899d8e1c179cbef!4m6!3m5!1s0x4786c6ad9194dffb:0x9c81e404a84e5b9f!8m2!3d45.4667507!4d9.1882762!16s%2Fg%2F1thl49b5?authuser=1&entry=ttu', '../img/intesa_ferrari.png', 6)
const intesaCusani = new Bank(14, '', 'Intesa Sanpaolo', 'Via Cusani, 16', 'Cont-P', 'L-V', '14:20', 'buste sciolte', 'Filiale. Scambio col tipo della reception.', false, 'https://www.google.com/maps/place/Intesa+Sanpaolo+S.p.A.+-+Filiale+Imprese/@45.4687914,9.1810318,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c14d7abbaac7:0x2014f14c44e1f36a!8m2!3d45.4687914!4d9.1836121!16s%2Fg%2F1v62gjn2?authuser=1&entry=ttu', '../img/intesa_cusani.png', '',  )
const intesaVerdi = new Bank(15, '', 'Intesa Sanpaolo', 'Via Verdi, 8', 'R', 'L-V', '14:30', '', 'Da Largo Victor de Sabata, puoi scendere la rampa in bici. Suona il campanello e ti aprono la sbarra. Spesso scatole da ritirare.', false, 'https://www.google.com/maps/place/Intesa+Sanpaolo+S.p.A./@45.4687916,9.1885722,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c79a555591e7:0xa57d2dbc86432795!8m2!3d45.4687916!4d9.1885722!16s%2Fg%2F11rqscbxck?authuser=1&entry=ttu', '../img/intesa_verdi.png', '', )
const mpsOrto = new Bank(16, '', 'Monte dei Paschi di Siena', 'Via San Pietro all\'orto, 24', 'Cont-M', 'L-V', '', 'di tela o plastica rosso bordeaux', 'Uffici. 1º Piano. Esci dall\'ascensore, vai a sinistra, poi dopo la porta a vetri ancora a sinistra, fai tutto il corridoio lasciandoti le scrivanie a sinistra, entra nell\'ultimo ufficio a destra. Se non c\'è il tipo chiedi alle impiegate', false, 'https://www.google.com/maps/place/Banca+Monte+dei+Paschi+di+Siena+S.p.A./@45.4674257,9.1925164,17z/data=!3m2!4b1!5s0x4786c6b019af5537:0xe6f312bafbc193d2!4m6!3m5!1s0x4786c77177ec32a7:0x60d74aa08eed32af!8m2!3d45.4674257!4d9.1950967!16s%2Fg%2F1tjxdjrx?authuser=1&entry=ttu', '../img/mps_orto.png', 11, )
const passadoreMatteotti = new Bank(17, '', 'Banca Passadore', 'Corso Matteotti, 7', 'R', 'L-V', '17:00', '', 'Uffici. Arrivi alla portineria, vai a sinistra, ascensore, 1º Piano. Reception.', false, 'https://www.google.com/maps/place/Banca+Passadore+%26+C./@45.4669925,9.1936631,17z/data=!4m6!3m5!1s0x4786c6b0020043e7:0x34ed6ddc62fd8453!8m2!3d45.4669925!4d9.1958518!16s%2Fg%2F1w4vht6s?authuser=1&entry=ttu', '../img/passadore_matteotti.png', '', )
const patrimoniMargherita = new Bank(18, '', 'Patrimoni Sella', 'Via S. Margherita, 4', 'Cont-P', 'L-V', '', 'di tela gialla', 'Uffici. 1º Piano. Reception', false, 'https://www.google.com/maps/place/Banca+Patrimoni+Sella+%26+C./@45.4652532,9.1853186,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c152b8f9e71d:0x7bdab2ece8b1423f!8m2!3d45.4652532!4d9.1878989!16s%2Fg%2F1tf6qnwt?authuser=1&entry=ttu', '../img/patrimoni_margherita.png', '', )
const ubsPolitecnico = new Bank(19, '', 'Ubs', 'Via del Vecchio Politecnico, 3', 'R', 'L-V', '16:00', '', 'Uffici. 17º piano. Appena esci dall\'ascensore, entrare nella porta con il campanello con scritto "avanti" (non suonare) e prendere SOLO la sacca a terra, non altre eventuali buste sulla mensola (sono di DHL). Sulla mensola ci sono SEMPRE i fogli da firmare, firmarli tutti.', false, 'https://www.google.com/maps/place/UBS+Europe+SE/@45.4724356,9.1963443,17z/data=!4m6!3m5!1s0x4786c6b73b11fc01:0x54be8ea9894c92cf!8m2!3d45.4724831!4d9.1966707!16s%2Fg%2F1td57hc2?authuser=1&entry=ttu', '../img/ubs_politecnico.png', '', )
const unicreditManzoni = new Bank(20, '', 'Unicredit', 'Via Manzoni, 9', 'R', 'L-V', '16:00', 'di tela nera.', 'Edificio con impalcatura. Entrare nel corridoio (ingrasso con travi di legno). In fondo ci sono gli uffici', false, 'https://www.google.com/maps/place/UniCredit/@45.4687965,9.1886101,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6b53f59aeef:0x5fd83ef1bb8be485!8m2!3d45.4687965!4d9.1911904!16s%2Fg%2F1wfvljq1?authuser=1&entry=ttu', '../img/unicredit_manzoni.png', '', )
const finecoVenezia = new Bank(21, '', 'Fineco', 'Corso Venezia, 5', 'Cont-P', 'L-V', '17:00', 'di plastica blu scuro', 'Uffici. 2º piano.', false, 'https://www.google.com/maps/place/Fineco/@45.4676217,9.1954491,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6bac8e67a01:0x395207c4ab36df88!8m2!3d45.467618!4d9.198024!16s%2Fg%2F11b6j7nxlj?authuser=1&entry=ttu', '--/img/fineco_venezia.png', '', )
const allianzPassarella = new Bank(22, '', 'Allianz', 'Galleria Passarella, 1', 'Cont-P', 'L/M/V', '14:20', 'di plastica gialla', 'Uffici. Ascensore Est, 3º piano. Reception.', false, 'https://www.google.com/maps/place/Allianz+Bank+Financial+Advisors+S.p.A./@45.4658496,9.1949214,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c17c94f40223:0xe5664c82d6e2dfa4!8m2!3d45.4658496!4d9.1975017!16s%2Fg%2F1ptwzxt6q?authuser=1&entry=ttu', '../img/allianz_passarella.png', )
const allianzOrefici = new Bank(23, '', 'Allianz', 'Via Orefici, 2', 'Cont-P', 'L/M/V', '17:00', 'di plastica gialla', 'Uffici. 5º piano.', false, 'https://www.google.com/maps/place/Allianz+Bank+Financial+Advisors+S.p.A./@45.4640404,9.1856365,17z/data=!4m6!3m5!1s0x4786c40207b40987:0x819fb7f190aa3a0e!8m2!3d45.4640404!4d9.1882168!16s%2Fg%2F1hc192q24?authuser=1&entry=ttu', '../img/allianz_orefici.png', '', )
const bnlOrso = new Bank(24, '', 'Bnl', 'Via dell\'Orso, 4', 'Cont-M', 'L/M/V', '', 'di tela gialla', 'Uffici. 3º piano. Sulla borsa c\'è scritto anche "angolo Brera, 3", ma si entra da Orso 4.', false, "https://www.google.com/maps/place/Via+dell'Orso,+4,+20121+Milano+MI/@45.4692315,9.186447,18z/data=!3m1!4b1!4m6!3m5!1s0x4786c6b2f19f604f:0x5a4372dfbfb41c88!8m2!3d45.4692315!4d9.1876457!16s%2Fg%2F11bw3zwjvz?authuser=1&entry=ttu", '../img/bnl_orso.png', 16)
const bnlMarghe = new Bank(25, '', 'Bnl', 'Via S. Margherita, 12/14', 'Cont-M', 'L/M/V', '', 'di tela gialla', 'Filiale. Passi le porte scorrevoli, vai in fondo a sinistra, impiegato alla scrivanio.', false, 'https://www.google.com/maps/place/BNL+BNP+Paribas/@45.4660788,9.1861653,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6adc75773a9:0x519638c2f7aa7f75!8m2!3d45.4660788!4d9.1887456!16s%2Fg%2F11ggzb61y5?authuser=1&entry=ttu', 'img/bnl_margherita.png', 4)
const bnlGaribaldi = new Bank(26, '04307', 'Bnl', 'Corso Garibaldi, 85/A', 'Cont-M', 'L/M/V', '', 'di tela gialla', 'Filiale. Impiegata alla scrivania dritto appena entri.', false, 'https://www.google.com/maps/place/BNL+BNP+Paribas/@45.4765479,9.1469142,14z/data=!3m1!4b1!4m6!3m5!1s0x4786c13581bbb7bb:0xbd02774718d76066!8m2!3d45.4765538!4d9.1837802!16s%2Fg%2F11c6dxnmcc?authuser=1&entry=ttu', '../img/bnl_garibaldi.png', 20.5)
const bpmPontaccio = new Bank(27, '', 'Bpm', 'Via Pontaccio, 23', 'Cont-P', 'L/M/V', '14:30', 'di tela rossa', 'Filiale. Suonare', false, 'https://www.google.com/maps/place/Banco+BPM/@45.4719942,9.1817213,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c11e734901d7:0xd710ea902dccf68d!8m2!3d45.4719942!4d9.1843016!16s%2Fg%2F1tfcgn2y?authuser=1&entry=ttu', '../img/bpm_pontaccio.png', '', )
const bpmMercanti = new Bank(28, '02085', 'Bpm', 'Piazza Mercanti, 9', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Si entra anche da Orefici 12, ma è più comodo entrare da piazza mercanti.', false, 'https://www.google.com/maps/place/Banco+BPM/@45.464568,9.185036,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c6ac44ecb4d3:0x5c26075ac060f082!8m2!3d45.464568!4d9.1876163!16s%2Fg%2F11cmy88csp?authuser=1&entry=ttu', '../img/bpm_mercanti.png', 1)
const bpmCernaia = new Bank(29, '', 'Bpm', 'Via Cernaia, 2', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Suonare', false, 'https://www.google.com/maps/place/Banco+BPM/@45.4736059,9.1872835,17z/data=!3m2!4b1!5s0x4786c6b45e45311b:0x7b0d2d33270c2e65!4m6!3m5!1s0x4786c7525c885ab9:0x28029c51d467c95b!8m2!3d45.4736059!4d9.1898638!16s%2Fg%2F11hfjrqw7f?authuser=1&entry=ttu', '../img/bpm_cernaia.png', 27)
const bpmMarghe = new Bank(30, '', 'Bpm', 'Via S. Margherita, 5', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Sta giusto di fronte a BNL di Santa Margherita 12. Appena entri vai dritto, vai oltre le scrivanie degli impiegati, la borsa sta su un mobile, fai tu lo scambio. Occhio, chiudere la borsa che la lasciano sempre aperta', false, "https://www.google.com/maps/place/45%C2%B027'57.9%22N+9%C2%B011'18.3%22E/@45.46608,9.1873729,19z/data=!4m4!3m3!8m2!3d45.46608!4d9.188426?authuser=1&entry=ttu", '../img/bpm_margherita.png', 5)
const bpmTurati = new Bank(31, '', 'Bpm', 'Via Filippo Turati, 26', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Suonare. La borsa sta su un mobile più avanti a sinistra. Fai tu lo scambio o chiedi all\'impiegato alla scrivania', false, 'https://www.google.com/maps/place/Banco+BPM/@45.4759286,9.1923979,17z/data=!3m2!4b1!5s0x4786c6b63cd05357:0xb1595fb42645e2f3!4m6!3m5!1s0x4786c6b622d1f91b:0x845ce89ace993696!8m2!3d45.4759286!4d9.1949782!16s%2Fg%2F1tcwvlt0?authuser=1&entry=ttu', '../img/bpm_turati.png', 29)
const bpmSalvini = new Bank(32, '', 'Bpm', 'Via Salvini, 1', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Entrata da Corso Venezia, angolo con Salvini.', false, '', '', 32)
const fideuramVenezia = new Bank(33, '', 'Fideuram', 'Corso Venezia, 54', 'Cont-P', 'L/M/V', '16:00', 'buste in sacchetto trasparente', 'Uffici. Portineria', false, '', '', '', )
const fideuramHoepli = new Bank(34, '', 'Fideuram', 'Via Hoepli, 10', 'R', 'L/M/V', '15:00', 'buste sciolte', 'Uffici. Portineria. Si fa con Isp di Hoepli, non c\'è bisogno di dividere le buste.', false, '', '', 8)
const fideuramMontebello = new Bank(35, '00115', 'Fideuram', 'Via Montebello, 18', 'R', 'L/M/V', '15:30', '', 'Uffici. Entri e vai a destra, reception.', false, '')
const finecoBiancamano = new Bank(36, '', 'Fineco', 'Piazzale Biancamano, 2', 'Cont-M', 'L/M/V', '', 'borsa di plastica blu scuro', 'Filiale. Si entra da Piazza Lega Lombarda (dietro l\'angolo)', false, '', '', 24)
const finecoBroletto = new Bank(37, '', 'Fineco', 'Via Broletto, 41', 'Cont-P', 'L/M/V', '', 'borsa di plastica blu scuro', 'Filiale.', false, '', '', '', )
const intesaHoepli = new Bank(38, '', 'Isp Private Banking', 'Via Hoepli, 10', 'R', 'L/M/V', '15:00', 'buste sciolte', 'Uffici. Portineria. Si fa con Fideuram di Hoepli, non c\'è bisogno di dividere le buste.', false, '', '', 9)
const intesaPortaNuova = new Bank(39, '', 'Isp Private Banking', 'Corso di Porta Nuova, 7', 'CmRp', 'L/M/V', '', 'buste sciolte', 'Uffici. Portineria. Da non confondere con Isp di Montebello, 18', false, '', '', 28)
const intesaLovanio = new Bank(40, '40009', 'Isp Private Banking', 'Via Lovanio, 5/A', 'Cont-M', 'L/M/V', '', 'buste sciolte', 'Uffici. Chiedere Portinaia.', false, '', '', 26)
const intesaBonaparte = new Bank(41, '00342', 'Isp Private Banking', 'Foro Bonaparte, 24', 'Cont-M', 'L/M/V', '', 'buste sciolte', 'Uffici. Ascensore di destra, 3º piano. Stesso edificio di Bpm Bonaparte.', false, '', '', 20.3)
const lombardaManzoni = new Bank(42, '', 'Cassa Lombarda', 'Via Manzoni, 14', 'CmRp', 'L/M/V', '', 'busta bianca e blu', 'Uffici. Piano terra, in fondo al patio. Reception. Il ritiro si fa solo il lunedì e il mercoledi.', false, '', '', 14)
const mediobancaMercanti = new Bank(43, '', 'Mediobanca', 'Via Mercanti, 10', 'R', 'L/M/V', '', 'di tela scura', 'Reception', false, '', '', 2)
const mediobancaAugusto = new Bank(44, '', 'Mediobanca', 'Largo Augusto, 3', 'R', 'L/M/V', '14:40', '', 'Uffici. Reception.', false, '')
const btlBastioni = new Bank(45, '', 'Banca del Territorio Lombardo', 'Bastioni di Porta Volta, 10', 'Cont-M', 'Lun e Mer', '', 'di tela blu scuro', 'Filiale. Portavalori su parete esterna.', true, '', '', 25)
const unicreditMoscova = new Bank(46, '', 'Unicredit', 'Via della Moscova, 58', 'Cont-M', 'Lun e Gio', '', 'di tela nera', 'Filiale. 1º piano.', false, '', '', 21)
const unicreditVerdi = new Bank(47, '', 'Unicredit', 'Via Verdi, 7', 'Cont-M', 'Lun e Gio', '', 'di tela nera', 'Filiale. Portavalori appena entri.', true, '', '', 17)
const unicreditMeda = new Bank(48, '', 'Unicredit', 'Via Meda, 1', 'Cont-P', 'Lun e Gio', '15:00', 'di tela nera', 'Filiale.', false, '', '', '', )
const intesaVenezia = new Bank(49, '', 'Intesa', 'Corso Venezia, 49', 'Cont-M', 'Mar e Gio', '', 'buste sciolte', 'Filiale. Portavalori su parete esterna.', true, '', '', 23)
const intesaGaribaldi = new Bank(50, '', 'Intesa', 'Corso Garibaldi, 86', 'Cont-M', 'Mar e Gio', '', 'buste sciolte', 'Filiale. Portavalori sul lato posteriore che da su Via Statuto.', true, '', '', 22)
const intesaCordusio = new Bank(51, '', 'Intesa', 'Piazza Cordusio 2/4', 'Cont-M', 'Mar e Gio', '', 'buste sciolte', 'Filiale. Portavalori sul lato che da su Via Tommaso Grossi (a metà della via)', true, '', '', 4)
const mpsCavour = new Bank(52, '', 'Monte dei Paschi di Siena', 'Piazza Cavour, 1', 'Cont-M', 'Mar', '', 'di tela rosso scuro', 'Filiale.', false, '', '', 22)
const astiManzoni = new Bank(53, '', 'Banca di Asti', 'Via Manzoni, 12', 'Cont-M', 'Mer', '', 'di plastica rossa', 'Filiale. Angolo con Via Morone. Portavalori appena entri a destra.', true, '', '', 13)
const bnlTurati = new Bank(54, '', 'Bnl', 'Via Filippo Turati, 29', 'Cont-M', 'Mer', '', 'di tela gialla', 'Filiale. Ingresso in Piazza della Repubblica', false, '', '', 31)
const caBroletto = new Bank(55, '', 'Credit Agricole', 'Via Broletto, 37', 'Cont-M', 'Mer', '', 'di plastica blu', 'Filiale.', false, '', '', 17)
const caVerri = new Bank(56, '', 'Credit Agricole', 'Via Verri, 2', 'Cont-M', 'Mer', '', 'busta di plastica bianca e blu', 'Filiale.', false, '', '', 12)
const caMoscova = new Bank(57, '', 'Credit Agricole', 'Via della Moscova, 53', 'Cont-M', 'Mer', '', 'di plastica blu', 'Filiale.', false, '', '', 23)
const caTurati = new Bank(58, '', 'Credit Agricole', 'Via Filippo Turati, 40', 'Cont-M', 'Mer', '', 'di plastica blu', 'Filiale.', false, '', '', 30)
const alettiGaribaldi = new Bank(59, '', 'Banca Aletti', 'Corso Garibaldi, 99', 'Extra', '', '', 'busta sciolta', 'Recepcion del num. 99', false, '')
const allianzTurati = new Bank(60, '', 'Allianz', 'via Turati, 8', 'Extra', '', '', 'di tela nera.', 'Uffici, terzo piano.', false, '')


let banks = []
banks.push(bpmCusani, bpmBonaparte, caSanFedele, consuliaMonforte, credemAndegari, credemMonforte, dbProspero, finecoGaribaldi, generaliLiberty, ifisBorghetto, intesaFerrari, intesaCusani, intesaVerdi, mpsOrto, passadoreMatteotti, patrimoniMargherita, ubsPolitecnico, unicreditManzoni, finecoVenezia, alettiVenezia, bpmRovello, allianzPassarella, allianzOrefici, bnlOrso, bnlMarghe, bnlGaribaldi, bpmPontaccio, bpmMercanti, bpmCernaia, bpmMarghe, bpmTurati, bpmSalvini, fideuramVenezia, fideuramHoepli, fideuramMontebello, finecoBiancamano, finecoBroletto, intesaHoepli, intesaPortaNuova, intesaLovanio, intesaBonaparte, lombardaManzoni, mediobancaMercanti, mediobancaAugusto, btlBastioni, unicreditMoscova, unicreditVerdi, unicreditMeda, intesaVenezia, intesaGaribaldi, intesaCordusio, mpsCavour, astiManzoni, bnlTurati, caBroletto, caVerri, caMoscova, caTurati, alettiGaribaldi, allianzTurati)

banks.sort((a, b) => a.name.localeCompare(b.name))

let bankListContainer = document.querySelector('#morning')
console.log(bankListContainer)
let weekDay = document.querySelector('#day')
let ulExtra = document.querySelector('#extra')
let addButton = document.querySelector('#add-btn')
let nameInput = document.querySelector('#nome')
let addressInput = document.querySelector('#indirizzo')
let scegli = document.querySelector('.scegli')


// ******* FUNCTIONS ************


let bankTypes = {
    all: ['Cont-M', 'CmRp', 'Cont-P', 'Cont-P', 'R', '', 'Extra'],
    morning: ['Cont-M', 'CmRp'],
    evening: ['Cont-P', 'CmRp', 'R'],
    contestuali: ['Cont-M', 'Cont-P'],
    ConsegnaRitiro: ['CmRp'],
    soloRitiro: ['R'],
    extra: ['Extra']
}

let bankDays = {
    all: ['L-V', 'L/M/V', 'Lun e Gio', 'Lun e Mer', 'Mar', 'Mar e Gio', 'Mer', ''],
    monday: ['L-V', 'L/M/V', 'Lun e Gio', 'Lun e Mer'],
    tuesday: ['L-V', 'Mar', 'Mar e Gio'],
    wednesday: ['L-V', 'L/M/V', 'Lun e Mer', 'Mer'],
    thursday: ['L-V', 'Lun e Gio', 'Mar e Gio'],
    friday: ['L-V', 'L/M/V']
}

let allDays = bankDays.all
let allTypes = bankTypes.all

let filterParams = {
    bankDay: allDays,
    bankType: allTypes
}


function setFilter(filter, value) {
    updateFilterParam(filter, value)
    console.log(filterParams.bankDay, filterParams.bankType)
    let filteredBanks = applyFilter()
    console.log(filteredBanks)
    createList(filteredBanks, bankListContainer)
}

function updateFilterParam(filter, value) {
    filterParams = {
        ...filterParams,
        [filter]: value
    }
}

function applyFilter() {
    let filteredBanks = banks
    // filtro per giorno
    if (filterParams.bankDay !== allDays) {
        filteredBanks = filteredBanks.filter(bank => filterParams.bankDay.includes(bank.days))
    }
    // filtro per tipo
    if (filterParams.bankType !== allTypes) {
        filteredBanks = filteredBanks.filter(bank => filterParams.bankType.includes(bank.type))
    }
    return filteredBanks
}

// console.log(Object.values(bankDays)[0])

// console.log(applyFilter(day, type))

let daysBtnList = document.querySelector('#days-btn-list')
let typesBtnList = document.querySelector('#type-btn-list')
let daysButtons = Array.from(daysBtnList.querySelectorAll('a'))
let typesButtons = Array.from(typesBtnList.querySelectorAll('a'))

daysBtnList.addEventListener('click', (e) => {
    // console.log(e.target)
    let pressedButton = e.target.closest('a')
    if (pressedButton) {
        pressedButton.classList.add('active')
        let otherButtons = daysButtons.filter(button => button !== pressedButton)
        otherButtons.forEach(button => button.classList.remove('active'))
        let day = Object.values(bankDays)[daysButtons.indexOf(pressedButton)]
        setFilter('bankDay', day)
    } 
})
typesBtnList.addEventListener('click', (e) => {
    // console.log(e.target)
    let pressedButton = e.target.closest('a')
    if (pressedButton) {
        pressedButton.classList.add('active')
        let otherButtons = typesButtons.filter(button => button !== pressedButton)
        otherButtons.forEach(button => button.classList.remove('active'))
        let type = Object.values(bankTypes)[typesButtons.indexOf(pressedButton)]
        setFilter('bankType', type)
    } 
})



let selectMorning = function(array) {
    let morning = []
    for (let bank of array) {
        if (bank.type == 'Cont-M' || bank.type == 'CmRp' || bank.type == 'Cont-P') {
            morning.push(bank)
        }
    }
    morning.sort((a, b) => a.orderM - b.orderM)
    createList(morning, bankListContainer)
    scegli.remove()
}

let selectEvening = function(array) {
    let evening = []
    for (let bank of array) {
        if (bank.type == 'Cont-P' || bank.type == 'R' || bank.type == 'CmRp') {
            evening.push(bank)
        }
    }
    createList(evening, bankListContainer)
    scegli.remove()
}

// ***************************************************************

// *********** ARRAYS ************+

let monday = []
for (let bank of banks) {
    if (bank.days == 'L-V' || bank.days == 'L/M/V' || bank.days == 'Lun e Gio' || bank.days == 'Lun e Mer') {
        monday.push(bank)
    }
}

let tuesday = []
for (let bank of banks) {
    if (bank.days == 'L-V' || bank.days == 'Mar' || bank.days == 'Mar e Gio') {
        tuesday.push(bank)
    }
}

let wednesday = []
for (let bank of banks) {
    if (bank.days == 'L-V' || bank.days == 'Mer' || bank.days == 'L/M/V' || bank.days == 'Lun e Mer') {
        wednesday.push(bank)
    }
}

let thursday = []
for (let bank of banks) {
    if (bank.days == 'L-V' || bank.days == 'Mar e Gio' || bank.days == 'Lun e Gio') {
        thursday.push(bank)
    }
}

let friday = []
for (let bank of banks) {
    if (bank.days == 'L-V' || bank.days == 'L/M/V') {
        friday.push(bank)
    }
}




let btn1 = document.querySelector('#btn-1')
let btn2 = document.querySelector('#btn-2')
let btn3 = document.querySelector('#btn-3')
let btn4 = document.querySelector('#btn-4')
let btn5 = document.querySelector('#btn-5')

let tutteButton = document.querySelector('#tutte-btn')

// btn1.addEventListener('click', () => {
//         selectMorning(monday) 
//         weekDay.textContent = 'Lunedì mattina'
// })
// btn2.addEventListener('click', () => {
//         selectMorning(tuesday)
//         weekDay.textContent = 'Martedì mattina'
// })
// btn3.addEventListener('click', () => {
//         selectMorning(wednesday)
//         weekDay.textContent = 'Mercoledì mattina'
// })
// btn4.addEventListener('click', () => {
//         selectMorning(thursday)
//         weekDay.textContent = 'Giovedì mattina'
// })
// btn5.addEventListener('click', () => {
//     selectMorning(friday)
//     weekDay.textContent = 'Venerdì mattina'
// })



let btn1p = document.querySelector('#btn-1p')
let btn2p = document.querySelector('#btn-2p')
let btn3p = document.querySelector('#btn-3p')
let btn4p = document.querySelector('#btn-4p')
let btn5p = document.querySelector('#btn-5p')

// btn1p.addEventListener('click', () => {
//     selectEvening(monday) 
//     weekDay.textContent = 'Lunedì pomeriggio'
// })
// btn2p.addEventListener('click', () => {
//     selectEvening(tuesday)
//     weekDay.textContent = 'Martedì pomeriggio'
// })
// btn3p.addEventListener('click', () => {
//     selectEvening(wednesday)
//     weekDay.textContent = 'Mercoledì pomeriggio'
// })
// btn4p.addEventListener('click', () => {
//     selectEvening(thursday)
//     weekDay.textContent = 'Giovedì pomeriggio'
// })
// btn5p.addEventListener('click', () => {
// selectEvening(friday)
// weekDay.textContent = 'Venerdì pomeriggio'
// })


// tutteButton.addEventListener('click', () => {
//     createList(banks, bankListContainer)
//     scegli.remove()
//     weekDay.textContent = 'Tutte'
// })

addButton.addEventListener('click', () => {
    let name = nameInput.value
    let address = addressInput.value
    addExtra(name, address, ulExtra)
    nameInput.value = ''
    addressInput.value = ''
})

