import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextPropTypes,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NewsItem from './NewsItem';

const App: () => React$Node = () => {
  return(
      <SafeAreaView>
        <ScrollView>
          <NewsItem type='SİNEMA' title="Millie Bobby Brown, Russo Kardeşler'in Yeni Filminde Başrolde" description="Millie Bobby Brown, Universal Pictures'ın bilim kurgu filmi “The Electric State”te başrol oynayacak ve filmin yönetmenliğini ve yapımcılığını Anthony ve Joe Russo üstlenecek."/>
          <NewsItem type='SİNEMA' title="Oscar Isaac Başrollü Metal Gear Solid Hakkında Ne Biliyoruz" description="Geçtiğimiz yıldan bugüne bir Metal Gear Solid filminin çekilebileceği konuşuluyordu"/>
          <NewsItem type='SİNEMA' title="George Clooney, Batman ve Robin i İzlemeye Katlanamıyor" description="George Clooney, kendisinin Batman olduğu filmi izlemek istemiyor."/>

          <NewsItem type='MODA' title="First Light' Alexander McQueen 2021 İlkbahar/Yaz Koleksiyon Filmi" description="Alexander McQueen markası,İngiliz film yapımcısı Jonathan Glazer iş birliğiyle, 2021 İlkbahar / Yaz koleksiyonuna sanatsal bir bakış açısıyla yeniden yaklaşıyor."/>
          <NewsItem type='MODA' title="Fendi’den Yeni Bir Dans" description="Fendi, Baguette Friends Forever serisinin yeni üyesi The Baguette Dance'ı eğlenceli ve büyüleyici bir dokunuşla sunuyor."/>
          <NewsItem type='MODA' title="H&M Türkiye'den Sürdürülebilir Moda İçin Yeni Adım" description="Modayı Paylaş/Rewear Market ikinci el dijital alışveriş etkinliği ile H&M Türkiye, herkesi modada bir dönüşüm yolculuğuna davet ediyor."/>

          <NewsItem type='SPOR' title="Galatasaray teknik direktörü Fatih Terim gözünün yaşına bakmadı! Bu sözler sonrası ipi çekildi" description="Adı Galatasaray ile özdeşleşen Fatih Terim zamanında çok fazla oyuncusunun ipini çekti"/>
          <NewsItem type='SPOR' title="Galatasaray'a Falcao piyangosu! İki kulüp sıraya girdi" description="Radamel Falcao, Diagne'nin yedeği konumuna geldi."/>
          <NewsItem type='SPOR' title="Fenerbahçe peşindeydi Galatasaray bitirdi! Ocakta flaş transfer hamlesi" description="atih Terim'in raporu doğrultusunda çalışmaları yürüten Galatasaray'da daha önce Fenerbahçe'nin de peşinde olduğu bir isim gündeme geldi."/>

          <NewsItem type='EKONOMİ' title="Bu mesleği seçen paraya para demiyor! İşte geleceğin en yüksek maaşlı meslekleri" description=" Hürriyet'te yer alan habere göre, geleceğin meslekleri grubuna giren bu meslekler önümüzdeki 10 yılın meslekleri olarak gösteriliyor."/>
          <NewsItem type='EKONOMİ' title="Euro" description="9,35 Türk Lirası"/>
          <NewsItem type='EKONOMİ' title="2021 Memur maaş zammı enflasyon farkı ne kadar?" description="Memur maaşlarınaa yapılacak artış oranı, yıl sonu enflasyonuna göre belirlenecek. "/>

          <NewsItem type='MAGAZİN' title="SerenaySeren Serengil canlı yayında itiraf etti: Kerem Tunçeri'yi terk edip başkasıyla evlendim " description="Beyaz TV'de yayınlanan 'Söylemezsem Olmaz' programında yorumculuk yapan Seren Serengil'in, Kerem Tunçeri itirafları magazin gündemine bomba gibi düştü."/>
          <NewsItem type='MAGAZİN' title="Hadise ve Kaan Yıldırım kafaları karıştırdı" description="Kaan Yıldırım’ın komşuları, Hadise’nin aracını dün sitelerinde gördüklerini belirtti."/>
          <NewsItem type='MAGAZİN' title="Burak Özçivit ve Fahriye Evcen, Boğaz'da" description="Muhabirlere selam veren çift, “Hafta sonu kısıtlaması öncesinde Boğaz havası almak istedik” dedi."/>
          
          <NewsItem/>
          </ScrollView>
          
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 14,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;