var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiKecamatanJagakarsa_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatanJagakarsa_1 = format_BatasAdministrasiKecamatanJagakarsa_1.readFeatures(json_BatasAdministrasiKecamatanJagakarsa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatanJagakarsa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatanJagakarsa_1.addFeatures(features_BatasAdministrasiKecamatanJagakarsa_1);
var lyr_BatasAdministrasiKecamatanJagakarsa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatanJagakarsa_1, 
                style: style_BatasAdministrasiKecamatanJagakarsa_1,
                popuplayertitle: 'Batas Administrasi Kecamatan Jagakarsa',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKecamatanJagakarsa_1.png" /> Batas Administrasi Kecamatan Jagakarsa'
            });
var format_JaringanJalanKecamatanJagakarsa_2 = new ol.format.GeoJSON();
var features_JaringanJalanKecamatanJagakarsa_2 = format_JaringanJalanKecamatanJagakarsa_2.readFeatures(json_JaringanJalanKecamatanJagakarsa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanKecamatanJagakarsa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKecamatanJagakarsa_2.addFeatures(features_JaringanJalanKecamatanJagakarsa_2);
var lyr_JaringanJalanKecamatanJagakarsa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanKecamatanJagakarsa_2, 
                style: style_JaringanJalanKecamatanJagakarsa_2,
                popuplayertitle: 'Jaringan Jalan Kecamatan Jagakarsa',
                interactive: false,
                title: '<img src="styles/legend/JaringanJalanKecamatanJagakarsa_2.png" /> Jaringan Jalan Kecamatan Jagakarsa'
            });
var format_ReprojectServiceArea_3 = new ol.format.GeoJSON();
var features_ReprojectServiceArea_3 = format_ReprojectServiceArea_3.readFeatures(json_ReprojectServiceArea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReprojectServiceArea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReprojectServiceArea_3.addFeatures(features_ReprojectServiceArea_3);
var lyr_ReprojectServiceArea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReprojectServiceArea_3, 
                style: style_ReprojectServiceArea_3,
                popuplayertitle: 'Reproject Service Area',
                interactive: false,
                title: '<img src="styles/legend/ReprojectServiceArea_3.png" /> Reproject Service Area'
            });
var format_BufferedReprojectServiceArea_4 = new ol.format.GeoJSON();
var features_BufferedReprojectServiceArea_4 = format_BufferedReprojectServiceArea_4.readFeatures(json_BufferedReprojectServiceArea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferedReprojectServiceArea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferedReprojectServiceArea_4.addFeatures(features_BufferedReprojectServiceArea_4);
var lyr_BufferedReprojectServiceArea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferedReprojectServiceArea_4, 
                style: style_BufferedReprojectServiceArea_4,
                popuplayertitle: 'Buffered Reproject Service Area',
                interactive: false,
                title: '<img src="styles/legend/BufferedReprojectServiceArea_4.png" /> Buffered Reproject Service Area'
            });
var format_ReprojectPersebaranSMA_5 = new ol.format.GeoJSON();
var features_ReprojectPersebaranSMA_5 = format_ReprojectPersebaranSMA_5.readFeatures(json_ReprojectPersebaranSMA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReprojectPersebaranSMA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReprojectPersebaranSMA_5.addFeatures(features_ReprojectPersebaranSMA_5);
var lyr_ReprojectPersebaranSMA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReprojectPersebaranSMA_5, 
                style: style_ReprojectPersebaranSMA_5,
                popuplayertitle: 'Reproject Persebaran SMA',
                interactive: true,
                title: '<img src="styles/legend/ReprojectPersebaranSMA_5.png" /> Reproject Persebaran SMA'
            });

lyr_Positron_0.setVisible(true);lyr_BatasAdministrasiKecamatanJagakarsa_1.setVisible(true);lyr_JaringanJalanKecamatanJagakarsa_2.setVisible(true);lyr_ReprojectServiceArea_3.setVisible(true);lyr_BufferedReprojectServiceArea_4.setVisible(true);lyr_ReprojectPersebaranSMA_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_BatasAdministrasiKecamatanJagakarsa_1,lyr_JaringanJalanKecamatanJagakarsa_2,lyr_ReprojectServiceArea_3,lyr_BufferedReprojectServiceArea_4,lyr_ReprojectPersebaranSMA_5];
lyr_BatasAdministrasiKecamatanJagakarsa_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JaringanJalanKecamatanJagakarsa_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ReprojectServiceArea_3.set('fieldAliases', {'Nama Sekol': 'Nama Sekol', 'Jenjang': 'Jenjang', 'Alamat': 'Alamat', 'Status': 'Status', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'type': 'type', 'start': 'start', });
lyr_BufferedReprojectServiceArea_4.set('fieldAliases', {'Nama Sekol': 'Nama Sekol', 'Jenjang': 'Jenjang', 'Alamat': 'Alamat', 'Status': 'Status', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'type': 'type', 'start': 'start', 'Luas': 'Luas', });
lyr_ReprojectPersebaranSMA_5.set('fieldAliases', {'Nama Sekol': 'Nama Sekol', 'Jenjang': 'Jenjang', 'Alamat': 'Alamat', 'Status': 'Status', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'Foto': 'Foto', });
lyr_BatasAdministrasiKecamatanJagakarsa_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JaringanJalanKecamatanJagakarsa_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ReprojectServiceArea_3.set('fieldImages', {'Nama Sekol': 'TextEdit', 'Jenjang': 'TextEdit', 'Alamat': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_BufferedReprojectServiceArea_4.set('fieldImages', {'Nama Sekol': 'TextEdit', 'Jenjang': 'TextEdit', 'Alamat': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': '', });
lyr_ReprojectPersebaranSMA_5.set('fieldImages', {'Nama Sekol': 'TextEdit', 'Jenjang': 'TextEdit', 'Alamat': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BatasAdministrasiKecamatanJagakarsa_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JaringanJalanKecamatanJagakarsa_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ReprojectServiceArea_3.set('fieldLabels', {'Nama Sekol': 'no label', 'Jenjang': 'no label', 'Alamat': 'no label', 'Status': 'no label', 'Latitude': 'no label', 'Longtitude': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_BufferedReprojectServiceArea_4.set('fieldLabels', {'Nama Sekol': 'no label', 'Jenjang': 'no label', 'Alamat': 'no label', 'Status': 'no label', 'Latitude': 'no label', 'Longtitude': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'no label', });
lyr_ReprojectPersebaranSMA_5.set('fieldLabels', {'Nama Sekol': 'inline label - visible with data', 'Jenjang': 'no label', 'Alamat': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Latitude': 'no label', 'Longtitude': 'no label', });
lyr_ReprojectPersebaranSMA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});