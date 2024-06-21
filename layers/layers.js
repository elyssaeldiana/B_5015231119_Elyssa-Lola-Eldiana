var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
    title: 'Kecamatan Genteng<br />\
    <img src="styles/legend/KecamatanGenteng_1_0.png" /> <br />\
    <img src="styles/legend/KecamatanGenteng_1_1.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/KecamatanGenteng_1_2.png" /> Genteng<br />\
    <img src="styles/legend/KecamatanGenteng_1_3.png" /> Kapasari<br />\
    <img src="styles/legend/KecamatanGenteng_1_4.png" /> Ketabang<br />\
    <img src="styles/legend/KecamatanGenteng_1_5.png" /> Peneleh<br />'
        });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_d_Halte_Surabaya_3 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_3 = format_d_Halte_Surabaya_3.readFeatures(json_d_Halte_Surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_3.addFeatures(features_d_Halte_Surabaya_3);
var lyr_d_Halte_Surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_3, 
                style: style_d_Halte_Surabaya_3,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
                title: '<img src="styles/legend/d_Halte_Surabaya_3.png" /> d_Halte_Surabaya'
            });
var format_Servicearealines_4 = new ol.format.GeoJSON();
var features_Servicearealines_4 = format_Servicearealines_4.readFeatures(json_Servicearealines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_4.addFeatures(features_Servicearealines_4);
var lyr_Servicearealines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_4, 
                style: style_Servicearealines_4,
                popuplayertitle: "Service area (lines)",
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_4.png" /> Service area (lines)'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_d_Halte_Surabaya_3.setVisible(true);lyr_Servicearealines_4.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_KecamatanGenteng_1,lyr_Buffered_2,lyr_d_Halte_Surabaya_3,lyr_Servicearealines_4];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_Buffered_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Jangkauan': 'Jangkauan', });
lyr_d_Halte_Surabaya_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Jangkauan': 'Jangkauan', });
lyr_Servicearealines_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', });
lyr_Buffered_2.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_d_Halte_Surabaya_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'Jangkauan': '', });
lyr_Servicearealines_4.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'header label - visible with data', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', });
lyr_Buffered_2.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', 'Jangkauan': 'inline label - always visible', });
lyr_d_Halte_Surabaya_3.set('fieldLabels', {'Nama_Halte': 'header label - visible with data', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', 'Jangkauan': 'inline label - always visible', });
lyr_Servicearealines_4.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', 'type': 'inline label - always visible', 'start': 'inline label - always visible', });
lyr_Servicearealines_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});