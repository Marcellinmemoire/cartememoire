var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_paca_1 = new ol.format.GeoJSON();
var features_paca_1 = format_paca_1.readFeatures(json_paca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paca_1.addFeatures(features_paca_1);
var lyr_paca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paca_1, 
                style: style_paca_1,
                interactive: false,
                title: '<img src="styles/legend/paca_1.png" /> paca'
            });
var format_FPVAR_2 = new ol.format.GeoJSON();
var features_FPVAR_2 = format_FPVAR_2.readFeatures(json_FPVAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPVAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPVAR_2.addFeatures(features_FPVAR_2);
var lyr_FPVAR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPVAR_2, 
                style: style_FPVAR_2,
                interactive: true,
                title: '<img src="styles/legend/FPVAR_2.png" /> FPVAR'
            });
var format_FPHAUTEPRO_3 = new ol.format.GeoJSON();
var features_FPHAUTEPRO_3 = format_FPHAUTEPRO_3.readFeatures(json_FPHAUTEPRO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPHAUTEPRO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPHAUTEPRO_3.addFeatures(features_FPHAUTEPRO_3);
var lyr_FPHAUTEPRO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPHAUTEPRO_3, 
                style: style_FPHAUTEPRO_3,
                interactive: true,
                title: '<img src="styles/legend/FPHAUTEPRO_3.png" /> FPHAUTEPRO'
            });
var format_fpvaucluse_4 = new ol.format.GeoJSON();
var features_fpvaucluse_4 = format_fpvaucluse_4.readFeatures(json_fpvaucluse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fpvaucluse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fpvaucluse_4.addFeatures(features_fpvaucluse_4);
var lyr_fpvaucluse_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fpvaucluse_4, 
                style: style_fpvaucluse_4,
                interactive: true,
                title: '<img src="styles/legend/fpvaucluse_4.png" /> fpvaucluse'
            });
var format_FPbr_5 = new ol.format.GeoJSON();
var features_FPbr_5 = format_FPbr_5.readFeatures(json_FPbr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPbr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPbr_5.addFeatures(features_FPbr_5);
var lyr_FPbr_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPbr_5, 
                style: style_FPbr_5,
                interactive: true,
                title: '<img src="styles/legend/FPbr_5.png" /> FPbr'
            });
var format_fpalpemari_6 = new ol.format.GeoJSON();
var features_fpalpemari_6 = format_fpalpemari_6.readFeatures(json_fpalpemari_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fpalpemari_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fpalpemari_6.addFeatures(features_fpalpemari_6);
var lyr_fpalpemari_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fpalpemari_6, 
                style: style_fpalpemari_6,
                interactive: true,
                title: '<img src="styles/legend/fpalpemari_6.png" /> fpalpemari'
            });
var format_FPHAUTEALPE_7 = new ol.format.GeoJSON();
var features_FPHAUTEALPE_7 = format_FPHAUTEALPE_7.readFeatures(json_FPHAUTEALPE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPHAUTEALPE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPHAUTEALPE_7.addFeatures(features_FPHAUTEALPE_7);
var lyr_FPHAUTEALPE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPHAUTEALPE_7, 
                style: style_FPHAUTEALPE_7,
                interactive: true,
                title: '<img src="styles/legend/FPHAUTEALPE_7.png" /> FPHAUTEALPE'
            });
var format_15minP_8 = new ol.format.GeoJSON();
var features_15minP_8 = format_15minP_8.readFeatures(json_15minP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15minP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15minP_8.addFeatures(features_15minP_8);
var lyr_15minP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15minP_8, 
                style: style_15minP_8,
                interactive: true,
                title: '<img src="styles/legend/15minP_8.png" /> 15minP'
            });
var format_10minp_9 = new ol.format.GeoJSON();
var features_10minp_9 = format_10minp_9.readFeatures(json_10minp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minp_9.addFeatures(features_10minp_9);
var lyr_10minp_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10minp_9, 
                style: style_10minp_9,
                interactive: true,
                title: '<img src="styles/legend/10minp_9.png" /> 10minp'
            });
var format_5minP_10 = new ol.format.GeoJSON();
var features_5minP_10 = format_5minP_10.readFeatures(json_5minP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5minP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5minP_10.addFeatures(features_5minP_10);
var lyr_5minP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5minP_10, 
                style: style_5minP_10,
                interactive: true,
                title: '<img src="styles/legend/5minP_10.png" /> 5minP'
            });
var format_siterepro_11 = new ol.format.GeoJSON();
var features_siterepro_11 = format_siterepro_11.readFeatures(json_siterepro_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siterepro_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siterepro_11.addFeatures(features_siterepro_11);
var lyr_siterepro_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_siterepro_11, 
                style: style_siterepro_11,
                interactive: true,
                title: '<img src="styles/legend/siterepro_11.png" /> siterepro'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_paca_1.setVisible(true);lyr_FPVAR_2.setVisible(true);lyr_FPHAUTEPRO_3.setVisible(true);lyr_fpvaucluse_4.setVisible(true);lyr_FPbr_5.setVisible(true);lyr_fpalpemari_6.setVisible(true);lyr_FPHAUTEALPE_7.setVisible(true);lyr_15minP_8.setVisible(true);lyr_10minp_9.setVisible(true);lyr_5minP_10.setVisible(true);lyr_siterepro_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_paca_1,lyr_FPVAR_2,lyr_FPHAUTEPRO_3,lyr_fpvaucluse_4,lyr_FPbr_5,lyr_fpalpemari_6,lyr_FPHAUTEALPE_7,lyr_15minP_8,lyr_10minp_9,lyr_5minP_10,lyr_siterepro_11];
lyr_paca_1.set('fieldAliases', {'qc_id': 'qc_id', 'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_FPVAR_2.set('fieldAliases', {'Lib_Forêt': 'Libellé Forêt', });
lyr_FPHAUTEPRO_3.set('fieldAliases', {'Lib_Forêt': 'Libellé Forêt', });
lyr_fpvaucluse_4.set('fieldAliases', {'Lib_Forêt': 'Libellé forêt', });
lyr_FPbr_5.set('fieldAliases', {'Lib_Forêt': 'Libellé Forêt', });
lyr_fpalpemari_6.set('fieldAliases', {'Lib_Forêt': 'Libellé Forêt', });
lyr_FPHAUTEALPE_7.set('fieldAliases', {'Lib_Forêt': 'Libellé Forêt ', });
lyr_15minP_8.set('fieldAliases', {'Tps_Min': 'Temps à pied (minute)', });
lyr_10minp_9.set('fieldAliases', {'Tps_Min': 'Temps à pied (minute)', });
lyr_5minP_10.set('fieldAliases', {'Tps_Min': 'Temps à pied (minute)', });
lyr_siterepro_11.set('fieldAliases', {'nom_site': 'Nom Site', 'nom_com': 'Nom Commune', 'nom_dep': 'Nom Départemernt', 'catégorie': 'Catégorie du site', 'nb_visteur': 'Nombre de visiteur à l\'année', 'ouverture ': 'Mois d\'ouverture', 'g / p': 'Gratuit/Payant', 'gestion': 'gestion', 'lieu': 'Nature du lieu', 'mention': 'Distinction', 'descript': 'Description', });
lyr_paca_1.set('fieldImages', {'qc_id': '', 'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts2': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_FPVAR_2.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPHAUTEPRO_3.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_fpvaucluse_4.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPbr_5.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_fpalpemari_6.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPHAUTEALPE_7.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_15minP_8.set('fieldImages', {'Tps_Min': 'TextEdit', });
lyr_10minp_9.set('fieldImages', {'Tps_Min': 'TextEdit', });
lyr_5minP_10.set('fieldImages', {'Tps_Min': 'TextEdit', });
lyr_siterepro_11.set('fieldImages', {'nom_site': '', 'nom_com': '', 'nom_dep': '', 'catégorie': '', 'nb_visteur': '', 'ouverture ': '', 'g / p': '', 'gestion': '', 'lieu': '', 'mention': '', 'descript': '', });
lyr_paca_1.set('fieldLabels', {'qc_id': 'no label', 'code_insee': 'header label', 'nom': 'header label', 'nuts2': 'no label', 'wikipedia': 'inline label', 'surf_km2': 'inline label', });
lyr_FPVAR_2.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPHAUTEPRO_3.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_fpvaucluse_4.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPbr_5.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_fpalpemari_6.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPHAUTEALPE_7.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_15minP_8.set('fieldLabels', {'Tps_Min': 'inline label', });
lyr_10minp_9.set('fieldLabels', {'Tps_Min': 'inline label', });
lyr_5minP_10.set('fieldLabels', {'Tps_Min': 'inline label', });
lyr_siterepro_11.set('fieldLabels', {'nom_site': 'inline label', 'nom_com': 'inline label', 'nom_dep': 'inline label', 'catégorie': 'inline label', 'nb_visteur': 'inline label', 'ouverture ': 'inline label', 'g / p': 'inline label', 'gestion': 'inline label', 'lieu': 'inline label', 'mention': 'inline label', 'descript': 'inline label', });
lyr_siterepro_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});