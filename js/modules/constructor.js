class Bank {
    constructor(id, code, name, address, type, days, hours, bag, description, key, coords, image, orderM, orderE) {
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
        this.coords = coords
        this.image = image
        this.orderM = orderM
        this.orderE = orderE
    }
}

const bpmCusani = new Bank(1, '', 'Bpm', 'Via Cusani, 4', 'CmRp', 'L-V', '15:30', 'di tela rossa','Uffici. Primo piano', false, {lat: 45.4689631, lng: 9.1846044},'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=e_U0zxh6-cKLFIFmaPQEfw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=4.0975285&pitch=0&thumbfov=100', 18, 9)
const bpmBonaparte = new Bank(2, '01323', 'Bpm', 'Foro Bonaparte, 24', 'Cont-M', 'L-V', '', 'di tela rossa','Uffici. Secondo piano. Ascensore dritto in fondo.', false, {lat: 45.47154949999999, lng: 9.1832373}, '../img/intesa&bpm_bonaparte.png', 20, )
const caSanFedele = new Bank(3, '', 'Credit Agricole', 'Piazza San Fedele, 4', 'Cont-M', 'L-V', '', 'di plastica blu', 'Filiale. Portineria', false, {lat: 45.4664169, lng: 9.1915439}, 7, )
const alettiVenezia = new Bank(4, '01937', 'Banca Aletti', 'Corso Venezia, 46', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Uffici. Secondo Piano. Suonare il campanello.', false, {lat: 45.4725302, lng: 9.2033887}, '../img/aletti_venezia.png', 33, )
const bpmRovello = new Bank(5, '', 'Bpm', 'Via Rovello, 17', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Uffici. Piano terra. Campanello nº 55. Porta grande di legno dritto in fondo al cortile. Le buste da ritirare (se ci sono) stanno in una cassetta di plastica grigia su un mobiletto a metà del corridoio (a sinistra).', false, {lat: 45.4681417, lng: 9.183865599999999}, '../img/bpm_ravello.png', 19,)
const consuliaMonforte = new Bank(6, '', 'Consulia', 'Corso Monforte, 52/54', 'R', 'L-V', '16:30', '', 'Si entra dal 54 (angolo con Viale Bianca Maria). Lasciano 2 sacche grandi dietro la porta di servizio grigia, prima del patio sulla destra. Non prima delle 16:30.', false, {lat: 45.4676502, lng: 9.2055492}, '../img/consulia_monforte.png', '', 19)
const credemAndegari = new Bank(7, '', 'Credem', 'Via Andegari, 14', 'Cont-M', 'L-V', '', 'di tela verde, normalmente 2.', 'Filiale. Appena superi le 2 porte di sicurezza, ufficio a sinistra della portineria.', false, {lat: 45.4692049, lng: 9.1911861}, '../img/credem_andegari.png', 15 )
const credemMonforte = new Bank(8, '', 'Credem', 'Corso Monforte, 34', 'R', 'L-V', '', '', 'Filiale. Prima porta a vetri a sinistra dopo l\'ingresso principale.', false, {lat: 45.4672322, lng: 9.202779099999999}, '../img/credem_monforte.png', '', 18)
const dbProspero = new Bank(9, '', 'Deutsche Bank', 'Via S. Prospero, 2', 'Cont-M', 'L-V', '', 'di tela blu', 'Filiale. Dritto in fondo c\'è il tipo alla scrivania.', false, {lat: 45.466253613331745, lng: 9.186010206747568}, 3, )
const finecoGaribaldi = new Bank(10, '', 'Fineco', 'Corso Garibaldi, 86', 'Cont-P', 'L-V', '16:00', 'di plastica blu scuro', 'Uffici. Ingresso in galleria. Primo piano. Tipa alla reception.', false, {lat: 45.4772813, lng: 9.1846756},'', 14)
const generaliLiberty = new Bank(11, '', 'Generali', 'Piazzetta del Liberty', 'R', 'L-V', '15:00', 'di tela rosso bordeaux', 'Uffici. 4º piano. Esci dall\'ascensore vai a destra, tappeto rosso. Tipa alla reception.', false, 'https://www.google.com/maps/place/Piazza+del+Liberty,+2,+20121+Milano+MI/@45.4651849,9.1934723,19z/data=!3m1!4b1!4m6!3m5!1s0x4786c6af9870f6c3:0x4502964ef4f71325!8m2!3d45.465184!4d9.194116!16s%2Fg%2F11bw3ywfj8?authuser=1&entry=ttu', '../img/generali_liberty.png', 10, 6)
const ifisBorghetto = new Bank(12, '', 'Banca Ifis', 'Via Borghetto, 5', 'R', 'L-V', '17:00', '', 'Uffici. Portineria.', false, {lat: 45.47274789999999, lng: 9.2049653}, '../img/ifis_borghetto.png', '', 21)
const intesaFerrari = new Bank(13, '', 'Intesa Sanpaolo', 'Piazza Ferrari, 10', 'Cont-M', 'L-V', '', 'buste sciolte', 'Filiale. C\'è un campanello grigio su un paletto di fronte alla portineria, vicino alla porta a vetri. Lo suoni e vai verso i tornelli, ti viene incontro il tipo dall\'ufficio a destra dopo i tornelli. Nel dubbio chiedi in portineria.', false, {lat: 45.46686448608457, lng: 9.188478711890722}, '../img/intesa_ferrari.png', 6)
const intesaCusani = new Bank(14, '', 'Intesa Sanpaolo', 'Via Cusani, 16', 'Cont-P', 'L-V', '', 'buste sciolte', 'Filiale. Scambio col tipo della reception.', false, {lat: 45.4687806, lng: 9.1835872}, '../img/intesa_cusani.png', '', 2 )
const intesaVerdi = new Bank(15, '', 'Intesa Sanpaolo', 'Via Verdi, 8', 'R', 'L-V', '14:30', '', 'Da Largo Victor de Sabata, puoi scendere la rampa in bici. Suona il campanello e ti aprono la sbarra. Spesso scatole da ritirare.', false, {lat: 45.468709176873986, lng: 9.188961539787309}, '../img/intesa_verdi.png', '', 4)
const mpsOrto = new Bank(16, '', 'Monte dei Paschi di Siena', 'Via San Pietro all\'orto, 24', 'Cont-M', 'L-V', '', 'di tela o plastica rosso bordeaux', 'Uffici. 1º Piano. Esci dall\'ascensore, vai a sinistra, poi dopo la porta a vetri ancora a sinistra, fai tutto il corridoio lasciandoti le scrivanie a sinistra, entra nell\'ultimo ufficio a destra. Se non c\'è il tipo chiedi alle impiegate', false, {lat: 45.4674393, lng: 9.1950906}, '../img/mps_orto.png', 11, )
const passadoreMatteotti = new Bank(17, '', 'Banca Passadore', 'Corso Matteotti, 7', 'R', 'L-V', '17:00', '', 'Uffici. Arrivi alla portineria, vai a sinistra, ascensore, 1º Piano. Reception.', false, {lat: 45.4670138, lng: 9.1958004}, '../img/passadore_matteotti.png', '', 23)
const patrimoniMargherita = new Bank(18, '', 'Patrimoni Sella', 'Via S. Margherita, 4', 'Cont-P', 'L-V', '', 'di tela gialla', 'Uffici. 1º Piano. Reception', false, {lat: 45.46526227431897, lng: 9.187924370932247}, '../img/patrimoni_margherita.png', '', 11)
const ubsPolitecnico = new Bank(19, '', 'Ubs', 'Via del Vecchio Politecnico, 3', 'R', 'L-V', '16:00', '', 'Uffici. 17º piano. Appena esci dall\'ascensore, entrare nella porta con il campanello con scritto "avanti" (non suonare) e prendere SOLO la sacca a terra, non altre eventuali buste sulla mensola (sono di DHL). Sulla mensola ci sono SEMPRE i fogli da firmare, firmarli tutti.', false, {lat: 45.47253, lng: 9.1967121}, '../img/ubs_politecnico.png', '', 15)
const unicreditManzoni = new Bank(20, '', 'Unicredit', 'Via Manzoni, 9', 'R', 'L-V', '', 'di tela nera.', 'Edificio con impalcatura. Entrare nel corridoio (ingrasso con travi di legno). In fondo ci sono gli uffici', false, {lat: 45.4687965, lng: 9.1911904}, '../img/unicredit_manzoni.png', '', 12)
const finecoVenezia = new Bank(21, '', 'Fineco', 'Corso Venezia, 5', 'Cont-P', 'L-V', '17:00', 'di plastica blu scuro', 'Uffici. 2º piano.', false, {lat: 45.4677629, lng: 9.1975447}, '', 22)
const allianzPassarella = new Bank(22, '', 'Allianz', 'Galleria Passarella, 1', 'Cont-P', 'L/M/V', '14:20', 'di plastica gialla', 'Uffici. Ascensore Est, 3º piano. Reception.', false, {lat: 45.465627, lng: 9.197237}, '../img/allianz_passarella.png', '', 1)
const allianzOrefici = new Bank(23, '', 'Allianz', 'Via Orefici, 2', 'Cont-P', 'L/M/V', '17:00', 'di plastica gialla', 'Uffici. 5º piano.', false, {lat: 45.46404039999999, lng: 9.1882168}, '../img/allianz_orefici.png', '', 25)
const bnlOrso = new Bank(24, '', 'Bnl', 'Via dell\'Orso, 4', 'Cont-M', 'L/M/V', '', 'di tela gialla', 'Uffici. 3º piano. Sulla borsa c\'è scritto anche "angolo Brera, 3", ma si entra da Orso 4.', false, {lat: 45.4692315, lng: 9.1876457}, '../img/bnl_orso.png', 16)
const bnlMarghe = new Bank(25, '', 'Bnl', 'Via S. Margherita, 12/14', 'Cont-M', 'L/M/V', '', 'di tela gialla', 'Filiale. Passi le porte scorrevoli, vai in fondo a sinistra, impiegato alla scrivanio.', false, { lat: 45.46607646481486, lng: 9.188717521960271}, 'img/bnl_margherita.png', 4)
const bnlGaribaldi = new Bank(26, '04307', 'Bnl', 'Corso Garibaldi, 85/A', 'Cont-M', 'L/M/V', '', 'di tela gialla', 'Filiale. Impiegata alla scrivania dritto appena entri.', false, {lat: 45.4764637, lng: 9.183774099999999}, '../img/bnl_garibaldi.png', 20.5)
const bpmPontaccio = new Bank(27, '', 'Bpm', 'Via Pontaccio, 23', 'Cont-P', 'L/M/V', '14:30', 'di tela rossa', 'Filiale. Suonare', false, {lat: 45.4720358, lng: 9.1843735}, '../img/bpm_pontaccio.png', '', 3)
const bpmMercanti = new Bank(28, '02085', 'Bpm', 'Piazza Mercanti, 9', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Si entra anche da Orefici 12, ma è più comodo entrare da piazza mercanti.', false, {lat: 45.4649278, lng: 9.187669099999999}, '../img/bpm_mercanti.png', 1)
const bpmCernaia = new Bank(29, '', 'Bpm', 'Via Cernaia, 2', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Suonare', false, {lat: 45.4735975, lng: 9.1898547}, '../img/bpm_cernaia.png', 27)
const bpmMarghe = new Bank(30, '', 'Bpm', 'Via S. Margherita, 5', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Sta giusto di fronte a BNL di Santa Margherita 12. Appena entri vai dritto, vai oltre le scrivanie degli impiegati, la borsa sta su un mobile, fai tu lo scambio. Occhio, chiudere la borsa che la lasciano sempre aperta', false, {lat: 45.46615742853833, lng: 9.188488526895478}, '../img/bpm_margherita.png', 5)
const bpmTurati = new Bank(31, '', 'Bpm', 'Via Filippo Turati, 26', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Suonare. La borsa sta su un mobile più avanti a sinistra. Fai tu lo scambio o chiedi all\'impiegato alla scrivania', false, {lat: 45.4760648, lng: 9.1950162}, '../img/bpm_turati.png', 29)
const bpmSalvini = new Bank(32, '', 'Bpm', 'Via Salvini, 1', 'Cont-M', 'L/M/V', '', 'di tela rossa', 'Filiale. Entrata da Corso Venezia, angolo con Salvini.', false, {lat: 45.47224960952077, lng: 9.203105577597732}, '', 32)
const fideuramVenezia = new Bank(33, '', 'Fideuram', 'Corso Venezia, 54', 'Cont-P', 'L/M/V', '16:00', 'buste in sacchetto trasparente', 'Uffici. Portineria', false, {lat: 45.4736206, lng: 9.2044971}, '../img/fideuram_venezia.png', '', 20)
const fideuramHoepli = new Bank(34, '', 'Fideuram', 'Via Hoepli, 10', 'R', 'L/M/V', '15:00', 'buste sciolte', 'Uffici. Portineria. Si fa con Isp di Hoepli, non c\'è bisogno di dividere le buste.', false, {lat: 45.4664453, lng: 9.1928305} , '../img/fideuram&intesa_hoepli.png', 8, 7)
const fideuramMontebello = new Bank(35, '00115', 'Fideuram', 'Via Montebello, 18', 'R', 'L/M/V', '15:30', '', 'Uffici. Entri e vai a destra, reception.', false, {lat: 45.474744, lng: 9.190817299999999}, '../img/fideuram_montebello.png', '', 13)
const finecoBiancamano = new Bank(36, '', 'Fineco', 'Piazzale Biancamano, 2', 'Cont-M', 'L/M/V', '', 'borsa di plastica blu scuro', 'Filiale. Si entra da Piazza Lega Lombarda (dietro l\'angolo)', false, {lat: 45.4779624, lng: 9.1816254}, '', 24)
const finecoBroletto = new Bank(37, '', 'Fineco', 'Via Broletto, 41', 'Cont-P', 'L/M/V', '', 'borsa di plastica blu scuro', 'Filiale.', false, {lat: 45.4683842, lng: 9.185278799999999}, '../img/fineco_broletto.png', '', 10)
const intesaHoepli = new Bank(38, '', 'Isp Private Banking', 'Via Hoepli, 10', 'R', 'L/M/V', '15:00', 'buste sciolte', 'Uffici. Portineria. Si fa con Fideuram di Hoepli, non c\'è bisogno di dividere le buste.', false, {lat: 45.4664453, lng: 9.1928305}, '', 9, 7.5)
const intesaPortaNuova = new Bank(39, '', 'Isp Private Banking', 'Corso di Porta Nuova, 7', 'CmRp', 'L/M/V', '16:00', 'buste sciolte', 'Uffici. Portineria. Da non confondere con Isp di Montebello, 18', false, {lat: 45.4746895, lng: 9.1913188}, '../img/intesa_portanuova.png', 28, 17)
const intesaLovanio = new Bank(40, '40009', 'Isp Private Banking', 'Via Lovanio, 5/A', 'Cont-M', 'L/M/V', '', 'buste sciolte', 'Uffici. Chiedere Portinaia.', false, {lat: 45.47723329999999, lng: 9.1859571}, '', 26)
const intesaBonaparte = new Bank(41, '00342', 'Isp Private Banking', 'Foro Bonaparte, 24', 'Cont-M', 'L/M/V', '', 'buste sciolte', 'Uffici. Ascensore di destra, 3º piano. Stesso edificio di Bpm Bonaparte.', false, {lat: 45.47154949999999, lng: 9.1832373}, '', 20.3)
const lombardaManzoni = new Bank(42, '', 'Cassa Lombarda', 'Via Manzoni, 14', 'CmRp', 'L/M/V', '', 'busta bianca e blu', 'Uffici. Piano terra, in fondo al patio. Reception. Il ritiro si fa solo il lunedì e il mercoledi.', false, {lat: 45.4689866, lng: 9.1918207}, '../img/lombarda_manzoni.jpg', 14, 16)
const mediobancaMercanti = new Bank(43, '', 'Mediobanca', 'Via Mercanti, 10', 'R', 'L/M/V', '', 'di tela scura', 'Reception', false, {lat: 45.4652428, lng: 9.1873613}, '../img/mb_mercanti.png', 2, 24)
const mediobancaAugusto = new Bank(44, '', 'Mediobanca', 'Largo Augusto, 3', 'R', 'L/M/V', '14:40', '', 'Uffici. Reception.', false, {lat: 45.4634385, lng: 9.197238500000001}, '../img/mb_augusto.png', '', 5)
const btlBastioni = new Bank(45, '', 'Banca del Territorio Lombardo', 'Bastioni di Porta Volta, 10', 'Cont-M', 'Lun e Mer', '', 'di tela blu scuro', 'Filiale. Portavalori su parete esterna.', true, {lat: 45.4801299, lng: 9.1816101}, '', 25)
const unicreditMoscova = new Bank(46, '', 'Unicredit', 'Via della Moscova, 58', 'Cont-M', 'Lun e Gio', '', 'di tela nera', 'Filiale. 1º piano.', false, {lat: 45.4780325, lng: 9.183644400000002}, '', 21)
const unicreditVerdi = new Bank(47, '', 'Unicredit', 'Via Verdi, 7', 'Cont-M', 'Lun e Gio', '', 'di tela nera', 'Filiale. Portavalori appena entri.', true, {lat: 45.46851943379564, lng: 9.188423530652427}, '', 17)
const unicreditMeda = new Bank(48, '', 'Unicredit', 'Piazza Meda, 1', 'Cont-P', 'Lun e Gio', '15:00', 'di tela nera', 'Filiale.', false, {lat: 45.46677296382848, lng: 9.192657257556323}, '../img/unicredit_meda.png', '', 8 )
const intesaVenezia = new Bank(49, '', 'Intesa', 'Corso Venezia, 49', 'Cont-M', 'Mar e Gio', '', 'buste sciolte', 'Filiale. Portavalori su parete esterna.', true, {lat: 45.4712779, lng: 9.2014595}, '', 23)
const intesaGaribaldi = new Bank(50, '', 'Intesa', 'Corso Garibaldi, 86', 'Cont-M', 'Mar e Gio', '', 'buste sciolte', 'Filiale. Portavalori sul lato posteriore che da su Via Statuto.', true, {lat: 45.4772813, lng: 9.1846756}, '', 22)
const intesaCordusio = new Bank(51, '', 'Intesa', 'Piazza Cordusio 2/4', 'Cont-M', 'Mar e Gio', '', 'buste sciolte', 'Filiale. Portavalori sul lato che da su Via Tommaso Grossi (a metà della via)', true, {lat: 45.46550992593427, lng: 9.186905776822234}, '', 4)
const mpsCavour = new Bank(52, '', 'Monte dei Paschi di Siena', 'Piazza Cavour, 1', 'Cont-M', 'Mar', '', 'di tela rosso scuro', 'Filiale.', false, {lat: 45.4726704, lng: 9.1949106}, '', 22)
const astiManzoni = new Bank(53, '', 'Banca di Asti', 'Via Manzoni, 12', 'Cont-M', 'Mer', '', 'di plastica rossa', 'Filiale. Angolo con Via Morone. Portavalori appena entri a destra.', true, {lat: 45.4685743, lng: 9.191414199999999}, '', 13)
const bnlTurati = new Bank(54, '', 'Bnl', 'Via Filippo Turati, 29', 'Cont-M', 'Mer', '', 'di tela gialla', 'Filiale. Ingresso in Piazza della Repubblica', false, {lat: 45.4772302, lng: 9.1953997}, '', 31)
const caBroletto = new Bank(55, '', 'Credit Agricole', 'Via Broletto, 37', 'Cont-M', 'Mer', '', 'di plastica blu', 'Filiale.', false, {lat: 45.4680409, lng: 9.1853952}, '', 17)
const caVerri = new Bank(56, '', 'Credit Agricole', 'Via Verri, 2', 'Cont-M', 'Mer', '', 'busta di plastica bianca e blu', 'Filiale.', false, {lat: 45.46730377071192, lng: 9.194040491560667}, '', 12)
const caMoscova = new Bank(57, '', 'Credit Agricole', 'Via della Moscova, 53', 'Cont-M', 'Mer', '', 'di plastica blu', 'Filiale.', false, {lat: 45.4780306, lng: 9.182176199999999}, '', 23)
const caTurati = new Bank(58, '', 'Credit Agricole', 'Via Filippo Turati, 40', 'Cont-M', 'Mer', '', 'di plastica blu', 'Filiale.', false, {lat: 45.4767877, lng: 9.1960529}, '', 30)
const alettiGaribaldi = new Bank(59, '', 'Banca Aletti', 'Corso Garibaldi, 99', 'Extra', '', '', 'busta sciolta', 'Recepcion del num. 99', false, {lat: 45.4774253, lng: 9.183812099999999})
const allianzTurati = new Bank(60, '', 'Allianz', 'via Turati, 8', 'Extra', '', '', 'di tela nera.', 'Uffici, terzo piano.', false, {lat: 45.4739684, lng: 9.1950336})
const allianzAmedeo = new Bank(61, '', 'Allianz', 'Via Principe Amedeo, 1', 'Extra', '', '', 'di tela nera', 'Arriva la bolgetta più o meno una volta ogni due settimane. Contestuale. Piano terra a sinistra', false, {lat: 45.474920266062234, lng: 9.193485734320216}, '', '', '')

let banks = []
banks.push(bpmCusani, bpmBonaparte, caSanFedele, consuliaMonforte, credemAndegari, credemMonforte, dbProspero, finecoGaribaldi, generaliLiberty, ifisBorghetto, intesaFerrari, intesaCusani, intesaVerdi, mpsOrto, passadoreMatteotti, patrimoniMargherita, ubsPolitecnico, unicreditManzoni, finecoVenezia, alettiVenezia, bpmRovello, allianzPassarella, allianzOrefici, bnlOrso, bnlMarghe, bnlGaribaldi, bpmPontaccio, bpmMercanti, bpmCernaia, bpmMarghe, bpmTurati, bpmSalvini, fideuramVenezia, fideuramHoepli, fideuramMontebello, finecoBiancamano, finecoBroletto, intesaHoepli, intesaPortaNuova, intesaLovanio, intesaBonaparte, lombardaManzoni, mediobancaMercanti, mediobancaAugusto, btlBastioni, unicreditMoscova, unicreditVerdi, unicreditMeda, intesaVenezia, intesaGaribaldi, intesaCordusio, mpsCavour, astiManzoni, bnlTurati, caBroletto, caVerri, caMoscova, caTurati, alettiGaribaldi, allianzTurati, allianzAmedeo)

export {banks}