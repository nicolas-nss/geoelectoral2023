var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_pvoBTApvo_1 = new ol.format.GeoJSON();
var features_pvoBTApvo_1 = format_pvoBTApvo_1.readFeatures(json_pvoBTApvo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pvoBTApvo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pvoBTApvo_1.addFeatures(features_pvoBTApvo_1);
var lyr_pvoBTApvo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pvoBTApvo_1,
maxResolution:22.403572921809573,
 minResolution:9.801563153291687,

                style: style_pvoBTApvo_1,
                popuplayertitle: 'pvoBTA — pvo',
                interactive: false,
                title: '<img src="styles/legend/pvoBTApvo_1.png" /> pvoBTA — pvo'
            });
var format_20SUMAPAZ_2 = new ol.format.GeoJSON();
var features_20SUMAPAZ_2 = format_20SUMAPAZ_2.readFeatures(json_20SUMAPAZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20SUMAPAZ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20SUMAPAZ_2.addFeatures(features_20SUMAPAZ_2);
var lyr_20SUMAPAZ_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20SUMAPAZ_2,
maxResolution:64.41027215020253,
 
                style: style_20SUMAPAZ_2,
                popuplayertitle: '20 SUMAPAZ',
                interactive: true,
                title: '<img src="styles/legend/20SUMAPAZ_2.png" /> 20 SUMAPAZ'
            });
var format_19CIUDADBOLIVAR_3 = new ol.format.GeoJSON();
var features_19CIUDADBOLIVAR_3 = format_19CIUDADBOLIVAR_3.readFeatures(json_19CIUDADBOLIVAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19CIUDADBOLIVAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19CIUDADBOLIVAR_3.addFeatures(features_19CIUDADBOLIVAR_3);
var lyr_19CIUDADBOLIVAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19CIUDADBOLIVAR_3,
maxResolution:64.41027215020253,
 
                style: style_19CIUDADBOLIVAR_3,
                popuplayertitle: '19 CIUDAD BOLIVAR',
                interactive: true,
                title: '<img src="styles/legend/19CIUDADBOLIVAR_3.png" /> 19 CIUDAD BOLIVAR'
            });
var format_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4 = new ol.format.GeoJSON();
var features_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4 = format_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4.readFeatures(json_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4.addFeatures(features_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4);
var lyr_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4,
maxResolution:64.41027215020253,
 
                style: style_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4,
                popuplayertitle: '18 RAFAEL URIBE URIBE — 189 RAFAEL URIBE URIBE',
                interactive: true,
                title: '<img src="styles/legend/18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4.png" /> 18 RAFAEL URIBE URIBE — 189 RAFAEL URIBE URIBE'
            });
var format_17CANDELARIA_5 = new ol.format.GeoJSON();
var features_17CANDELARIA_5 = format_17CANDELARIA_5.readFeatures(json_17CANDELARIA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17CANDELARIA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17CANDELARIA_5.addFeatures(features_17CANDELARIA_5);
var lyr_17CANDELARIA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17CANDELARIA_5,
maxResolution:64.41027215020253,
 
                style: style_17CANDELARIA_5,
                popuplayertitle: '17 CANDELARIA',
                interactive: true,
                title: '<img src="styles/legend/17CANDELARIA_5.png" /> 17 CANDELARIA'
            });
var format_16PUENTEARANDAPUENTEARANDA_6 = new ol.format.GeoJSON();
var features_16PUENTEARANDAPUENTEARANDA_6 = format_16PUENTEARANDAPUENTEARANDA_6.readFeatures(json_16PUENTEARANDAPUENTEARANDA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16PUENTEARANDAPUENTEARANDA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16PUENTEARANDAPUENTEARANDA_6.addFeatures(features_16PUENTEARANDAPUENTEARANDA_6);
var lyr_16PUENTEARANDAPUENTEARANDA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16PUENTEARANDAPUENTEARANDA_6,
maxResolution:64.41027215020253,
 
                style: style_16PUENTEARANDAPUENTEARANDA_6,
                popuplayertitle: '16 PUENTE ARANDA — PUENTE ARANDA',
                interactive: true,
                title: '<img src="styles/legend/16PUENTEARANDAPUENTEARANDA_6.png" /> 16 PUENTE ARANDA — PUENTE ARANDA'
            });
var format_15ANTONIONARIO_7 = new ol.format.GeoJSON();
var features_15ANTONIONARIO_7 = format_15ANTONIONARIO_7.readFeatures(json_15ANTONIONARIO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15ANTONIONARIO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15ANTONIONARIO_7.addFeatures(features_15ANTONIONARIO_7);
var lyr_15ANTONIONARIO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15ANTONIONARIO_7,
maxResolution:64.41027215020253,
 
                style: style_15ANTONIONARIO_7,
                popuplayertitle: '15 ANTONIO NARIÑO',
                interactive: true,
                title: '<img src="styles/legend/15ANTONIONARIO_7.png" /> 15 ANTONIO NARIÑO'
            });
var format_14MARTIRES_8 = new ol.format.GeoJSON();
var features_14MARTIRES_8 = format_14MARTIRES_8.readFeatures(json_14MARTIRES_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14MARTIRES_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14MARTIRES_8.addFeatures(features_14MARTIRES_8);
var lyr_14MARTIRES_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14MARTIRES_8,
maxResolution:64.41027215020253,
 
                style: style_14MARTIRES_8,
                popuplayertitle: '14 MARTIRES',
                interactive: true,
                title: '<img src="styles/legend/14MARTIRES_8.png" /> 14 MARTIRES'
            });
var format_13TEUSAQUILLO_9 = new ol.format.GeoJSON();
var features_13TEUSAQUILLO_9 = format_13TEUSAQUILLO_9.readFeatures(json_13TEUSAQUILLO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13TEUSAQUILLO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13TEUSAQUILLO_9.addFeatures(features_13TEUSAQUILLO_9);
var lyr_13TEUSAQUILLO_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13TEUSAQUILLO_9,
maxResolution:64.41027215020253,
 
                style: style_13TEUSAQUILLO_9,
                popuplayertitle: '13 TEUSAQUILLO',
                interactive: true,
                title: '<img src="styles/legend/13TEUSAQUILLO_9.png" /> 13 TEUSAQUILLO'
            });
var format_12BARRIOSUNIDOS_10 = new ol.format.GeoJSON();
var features_12BARRIOSUNIDOS_10 = format_12BARRIOSUNIDOS_10.readFeatures(json_12BARRIOSUNIDOS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12BARRIOSUNIDOS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12BARRIOSUNIDOS_10.addFeatures(features_12BARRIOSUNIDOS_10);
var lyr_12BARRIOSUNIDOS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12BARRIOSUNIDOS_10,
maxResolution:64.41027215020253,
 
                style: style_12BARRIOSUNIDOS_10,
                popuplayertitle: '12 BARRIOS UNIDOS',
                interactive: true,
                title: '<img src="styles/legend/12BARRIOSUNIDOS_10.png" /> 12 BARRIOS UNIDOS'
            });
var format_11SUBA_11 = new ol.format.GeoJSON();
var features_11SUBA_11 = format_11SUBA_11.readFeatures(json_11SUBA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11SUBA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11SUBA_11.addFeatures(features_11SUBA_11);
var lyr_11SUBA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11SUBA_11,
maxResolution:64.41027215020253,
 
                style: style_11SUBA_11,
                popuplayertitle: '11 SUBA',
                interactive: true,
                title: '<img src="styles/legend/11SUBA_11.png" /> 11 SUBA'
            });
var format_10ENGATIVA_12 = new ol.format.GeoJSON();
var features_10ENGATIVA_12 = format_10ENGATIVA_12.readFeatures(json_10ENGATIVA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10ENGATIVA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10ENGATIVA_12.addFeatures(features_10ENGATIVA_12);
var lyr_10ENGATIVA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10ENGATIVA_12,
maxResolution:64.41027215020253,
 
                style: style_10ENGATIVA_12,
                popuplayertitle: '10 ENGATIVA',
                interactive: true,
                title: '<img src="styles/legend/10ENGATIVA_12.png" /> 10 ENGATIVA'
            });
var format_09FONTIBON_13 = new ol.format.GeoJSON();
var features_09FONTIBON_13 = format_09FONTIBON_13.readFeatures(json_09FONTIBON_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09FONTIBON_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09FONTIBON_13.addFeatures(features_09FONTIBON_13);
var lyr_09FONTIBON_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09FONTIBON_13,
maxResolution:64.41027215020253,
 
                style: style_09FONTIBON_13,
                popuplayertitle: '09 FONTIBON',
                interactive: true,
                title: '<img src="styles/legend/09FONTIBON_13.png" /> 09 FONTIBON'
            });
var format_08KENNEDY_14 = new ol.format.GeoJSON();
var features_08KENNEDY_14 = format_08KENNEDY_14.readFeatures(json_08KENNEDY_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08KENNEDY_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08KENNEDY_14.addFeatures(features_08KENNEDY_14);
var lyr_08KENNEDY_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08KENNEDY_14,
maxResolution:64.41027215020253,
 
                style: style_08KENNEDY_14,
                popuplayertitle: '08 KENNEDY',
                interactive: true,
                title: '<img src="styles/legend/08KENNEDY_14.png" /> 08 KENNEDY'
            });
var format_07BOSA_15 = new ol.format.GeoJSON();
var features_07BOSA_15 = format_07BOSA_15.readFeatures(json_07BOSA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07BOSA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07BOSA_15.addFeatures(features_07BOSA_15);
var lyr_07BOSA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07BOSA_15,
maxResolution:64.41027215020253,
 
                style: style_07BOSA_15,
                popuplayertitle: '07 BOSA',
                interactive: true,
                title: '<img src="styles/legend/07BOSA_15.png" /> 07 BOSA'
            });
var format_06TUNJUELITO_16 = new ol.format.GeoJSON();
var features_06TUNJUELITO_16 = format_06TUNJUELITO_16.readFeatures(json_06TUNJUELITO_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06TUNJUELITO_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06TUNJUELITO_16.addFeatures(features_06TUNJUELITO_16);
var lyr_06TUNJUELITO_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06TUNJUELITO_16,
maxResolution:64.41027215020253,
 
                style: style_06TUNJUELITO_16,
                popuplayertitle: '06 TUNJUELITO',
                interactive: true,
                title: '<img src="styles/legend/06TUNJUELITO_16.png" /> 06 TUNJUELITO'
            });
var format_05USME_17 = new ol.format.GeoJSON();
var features_05USME_17 = format_05USME_17.readFeatures(json_05USME_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05USME_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05USME_17.addFeatures(features_05USME_17);
var lyr_05USME_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05USME_17,
maxResolution:64.41027215020253,
 
                style: style_05USME_17,
                popuplayertitle: '05 USME',
                interactive: true,
                title: '<img src="styles/legend/05USME_17.png" /> 05 USME'
            });
var format_04SANCRISTOBAL_18 = new ol.format.GeoJSON();
var features_04SANCRISTOBAL_18 = format_04SANCRISTOBAL_18.readFeatures(json_04SANCRISTOBAL_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04SANCRISTOBAL_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04SANCRISTOBAL_18.addFeatures(features_04SANCRISTOBAL_18);
var lyr_04SANCRISTOBAL_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04SANCRISTOBAL_18,
maxResolution:64.41027215020253,
 
                style: style_04SANCRISTOBAL_18,
                popuplayertitle: '04 SAN CRISTOBAL',
                interactive: true,
                title: '<img src="styles/legend/04SANCRISTOBAL_18.png" /> 04 SAN CRISTOBAL'
            });
var format_03SANTAFE_19 = new ol.format.GeoJSON();
var features_03SANTAFE_19 = format_03SANTAFE_19.readFeatures(json_03SANTAFE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03SANTAFE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03SANTAFE_19.addFeatures(features_03SANTAFE_19);
var lyr_03SANTAFE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03SANTAFE_19,
maxResolution:64.41027215020253,
 
                style: style_03SANTAFE_19,
                popuplayertitle: '03 SANTA FE',
                interactive: true,
                title: '<img src="styles/legend/03SANTAFE_19.png" /> 03 SANTA FE'
            });
var format_02CHAPINERO_20 = new ol.format.GeoJSON();
var features_02CHAPINERO_20 = format_02CHAPINERO_20.readFeatures(json_02CHAPINERO_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02CHAPINERO_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02CHAPINERO_20.addFeatures(features_02CHAPINERO_20);
var lyr_02CHAPINERO_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02CHAPINERO_20,
maxResolution:64.41027215020253,
 
                style: style_02CHAPINERO_20,
                popuplayertitle: '02 CHAPINERO',
                interactive: true,
                title: '<img src="styles/legend/02CHAPINERO_20.png" /> 02 CHAPINERO'
            });
var format_01USAQUEN_21 = new ol.format.GeoJSON();
var features_01USAQUEN_21 = format_01USAQUEN_21.readFeatures(json_01USAQUEN_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01USAQUEN_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01USAQUEN_21.addFeatures(features_01USAQUEN_21);
var lyr_01USAQUEN_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01USAQUEN_21,
maxResolution:64.41027215020253,
 
                style: style_01USAQUEN_21,
                popuplayertitle: '01 USAQUEN',
                interactive: true,
                title: '<img src="styles/legend/01USAQUEN_21.png" /> 01 USAQUEN'
            });
var format_19CIUDADBOLIVAR_22 = new ol.format.GeoJSON();
var features_19CIUDADBOLIVAR_22 = format_19CIUDADBOLIVAR_22.readFeatures(json_19CIUDADBOLIVAR_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19CIUDADBOLIVAR_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19CIUDADBOLIVAR_22.addFeatures(features_19CIUDADBOLIVAR_22);
var lyr_19CIUDADBOLIVAR_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19CIUDADBOLIVAR_22,
maxResolution:15.402456383744077,
 
                style: style_19CIUDADBOLIVAR_22,
                popuplayertitle: '19 CIUDAD BOLIVAR',
                interactive: true,
                title: '<img src="styles/legend/19CIUDADBOLIVAR_22.png" /> 19 CIUDAD BOLIVAR'
            });
var format_18RAFAELURIBEURIBE_23 = new ol.format.GeoJSON();
var features_18RAFAELURIBEURIBE_23 = format_18RAFAELURIBEURIBE_23.readFeatures(json_18RAFAELURIBEURIBE_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18RAFAELURIBEURIBE_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18RAFAELURIBEURIBE_23.addFeatures(features_18RAFAELURIBEURIBE_23);
var lyr_18RAFAELURIBEURIBE_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18RAFAELURIBEURIBE_23,
maxResolution:15.402456383744077,
 
                style: style_18RAFAELURIBEURIBE_23,
                popuplayertitle: '18 RAFAEL URIBE URIBE',
                interactive: true,
                title: '<img src="styles/legend/18RAFAELURIBEURIBE_23.png" /> 18 RAFAEL URIBE URIBE'
            });
var format_17CANDELARIA_24 = new ol.format.GeoJSON();
var features_17CANDELARIA_24 = format_17CANDELARIA_24.readFeatures(json_17CANDELARIA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17CANDELARIA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17CANDELARIA_24.addFeatures(features_17CANDELARIA_24);
var lyr_17CANDELARIA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17CANDELARIA_24,
maxResolution:15.402456383744077,
 
                style: style_17CANDELARIA_24,
                popuplayertitle: '17 CANDELARIA',
                interactive: true,
                title: '<img src="styles/legend/17CANDELARIA_24.png" /> 17 CANDELARIA'
            });
var format_16PUENTEARANDA_25 = new ol.format.GeoJSON();
var features_16PUENTEARANDA_25 = format_16PUENTEARANDA_25.readFeatures(json_16PUENTEARANDA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16PUENTEARANDA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16PUENTEARANDA_25.addFeatures(features_16PUENTEARANDA_25);
var lyr_16PUENTEARANDA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16PUENTEARANDA_25,
maxResolution:15.402456383744077,
 
                style: style_16PUENTEARANDA_25,
                popuplayertitle: '16 PUENTE ARANDA',
                interactive: true,
                title: '<img src="styles/legend/16PUENTEARANDA_25.png" /> 16 PUENTE ARANDA'
            });
var format_15ANTONIONARIO_26 = new ol.format.GeoJSON();
var features_15ANTONIONARIO_26 = format_15ANTONIONARIO_26.readFeatures(json_15ANTONIONARIO_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15ANTONIONARIO_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15ANTONIONARIO_26.addFeatures(features_15ANTONIONARIO_26);
var lyr_15ANTONIONARIO_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15ANTONIONARIO_26,
maxResolution:15.402456383744077,
 
                style: style_15ANTONIONARIO_26,
                popuplayertitle: '15 ANTONIO NARIÑO',
                interactive: true,
                title: '<img src="styles/legend/15ANTONIONARIO_26.png" /> 15 ANTONIO NARIÑO'
            });
var format_14MARTIRES_27 = new ol.format.GeoJSON();
var features_14MARTIRES_27 = format_14MARTIRES_27.readFeatures(json_14MARTIRES_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14MARTIRES_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14MARTIRES_27.addFeatures(features_14MARTIRES_27);
var lyr_14MARTIRES_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14MARTIRES_27,
maxResolution:15.402456383744077,
 
                style: style_14MARTIRES_27,
                popuplayertitle: '14 MARTIRES',
                interactive: true,
                title: '<img src="styles/legend/14MARTIRES_27.png" /> 14 MARTIRES'
            });
var format_13TEUSAQUILLO_28 = new ol.format.GeoJSON();
var features_13TEUSAQUILLO_28 = format_13TEUSAQUILLO_28.readFeatures(json_13TEUSAQUILLO_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13TEUSAQUILLO_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13TEUSAQUILLO_28.addFeatures(features_13TEUSAQUILLO_28);
var lyr_13TEUSAQUILLO_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13TEUSAQUILLO_28,
maxResolution:15.402456383744077,
 
                style: style_13TEUSAQUILLO_28,
                popuplayertitle: '13 TEUSAQUILLO',
                interactive: true,
                title: '<img src="styles/legend/13TEUSAQUILLO_28.png" /> 13 TEUSAQUILLO'
            });
var format_12BARRIOSUNIDOS_29 = new ol.format.GeoJSON();
var features_12BARRIOSUNIDOS_29 = format_12BARRIOSUNIDOS_29.readFeatures(json_12BARRIOSUNIDOS_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12BARRIOSUNIDOS_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12BARRIOSUNIDOS_29.addFeatures(features_12BARRIOSUNIDOS_29);
var lyr_12BARRIOSUNIDOS_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12BARRIOSUNIDOS_29,
maxResolution:15.402456383744077,
 
                style: style_12BARRIOSUNIDOS_29,
                popuplayertitle: '12 BARRIOS UNIDOS',
                interactive: true,
                title: '<img src="styles/legend/12BARRIOSUNIDOS_29.png" /> 12 BARRIOS UNIDOS'
            });
var format_11SUBA_30 = new ol.format.GeoJSON();
var features_11SUBA_30 = format_11SUBA_30.readFeatures(json_11SUBA_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11SUBA_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11SUBA_30.addFeatures(features_11SUBA_30);
var lyr_11SUBA_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11SUBA_30,
maxResolution:15.402456383744077,
 
                style: style_11SUBA_30,
                popuplayertitle: '11 SUBA',
                interactive: true,
                title: '<img src="styles/legend/11SUBA_30.png" /> 11 SUBA'
            });
var format_10ENGATIVA_31 = new ol.format.GeoJSON();
var features_10ENGATIVA_31 = format_10ENGATIVA_31.readFeatures(json_10ENGATIVA_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10ENGATIVA_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10ENGATIVA_31.addFeatures(features_10ENGATIVA_31);
var lyr_10ENGATIVA_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10ENGATIVA_31,
maxResolution:15.402456383744077,
 
                style: style_10ENGATIVA_31,
                popuplayertitle: '10 ENGATIVA',
                interactive: true,
                title: '<img src="styles/legend/10ENGATIVA_31.png" /> 10 ENGATIVA'
            });
var format_09FONTIBON_32 = new ol.format.GeoJSON();
var features_09FONTIBON_32 = format_09FONTIBON_32.readFeatures(json_09FONTIBON_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09FONTIBON_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09FONTIBON_32.addFeatures(features_09FONTIBON_32);
var lyr_09FONTIBON_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09FONTIBON_32,
maxResolution:15.402456383744077,
 
                style: style_09FONTIBON_32,
                popuplayertitle: '09 FONTIBON',
                interactive: true,
                title: '<img src="styles/legend/09FONTIBON_32.png" /> 09 FONTIBON'
            });
var format_08KENNEDY_33 = new ol.format.GeoJSON();
var features_08KENNEDY_33 = format_08KENNEDY_33.readFeatures(json_08KENNEDY_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08KENNEDY_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08KENNEDY_33.addFeatures(features_08KENNEDY_33);
var lyr_08KENNEDY_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08KENNEDY_33,
maxResolution:15.402456383744077,
 
                style: style_08KENNEDY_33,
                popuplayertitle: '08 KENNEDY',
                interactive: true,
                title: '<img src="styles/legend/08KENNEDY_33.png" /> 08 KENNEDY'
            });
var format_07BOSABOSA_34 = new ol.format.GeoJSON();
var features_07BOSABOSA_34 = format_07BOSABOSA_34.readFeatures(json_07BOSABOSA_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07BOSABOSA_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07BOSABOSA_34.addFeatures(features_07BOSABOSA_34);
var lyr_07BOSABOSA_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07BOSABOSA_34,
maxResolution:15.402456383744077,
 
                style: style_07BOSABOSA_34,
                popuplayertitle: '07 BOSA — BOSA',
                interactive: true,
                title: '<img src="styles/legend/07BOSABOSA_34.png" /> 07 BOSA — BOSA'
            });
var format_06TUNJUELITO_35 = new ol.format.GeoJSON();
var features_06TUNJUELITO_35 = format_06TUNJUELITO_35.readFeatures(json_06TUNJUELITO_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06TUNJUELITO_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06TUNJUELITO_35.addFeatures(features_06TUNJUELITO_35);
var lyr_06TUNJUELITO_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06TUNJUELITO_35,
maxResolution:15.402456383744077,
 
                style: style_06TUNJUELITO_35,
                popuplayertitle: '06 TUNJUELITO',
                interactive: true,
                title: '<img src="styles/legend/06TUNJUELITO_35.png" /> 06 TUNJUELITO'
            });
var format_05USMEUSME_36 = new ol.format.GeoJSON();
var features_05USMEUSME_36 = format_05USMEUSME_36.readFeatures(json_05USMEUSME_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05USMEUSME_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05USMEUSME_36.addFeatures(features_05USMEUSME_36);
var lyr_05USMEUSME_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05USMEUSME_36,
maxResolution:15.402456383744077,
 
                style: style_05USMEUSME_36,
                popuplayertitle: '05 USME — USME',
                interactive: true,
                title: '<img src="styles/legend/05USMEUSME_36.png" /> 05 USME — USME'
            });
var format_04SANCRISTOBAL03SANCRISTOBAL_37 = new ol.format.GeoJSON();
var features_04SANCRISTOBAL03SANCRISTOBAL_37 = format_04SANCRISTOBAL03SANCRISTOBAL_37.readFeatures(json_04SANCRISTOBAL03SANCRISTOBAL_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04SANCRISTOBAL03SANCRISTOBAL_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04SANCRISTOBAL03SANCRISTOBAL_37.addFeatures(features_04SANCRISTOBAL03SANCRISTOBAL_37);
var lyr_04SANCRISTOBAL03SANCRISTOBAL_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04SANCRISTOBAL03SANCRISTOBAL_37,
maxResolution:15.402456383744077,
 
                style: style_04SANCRISTOBAL03SANCRISTOBAL_37,
                popuplayertitle: '04 SAN CRISTOBAL — 03 SAN CRISTOBAL',
                interactive: true,
                title: '<img src="styles/legend/04SANCRISTOBAL03SANCRISTOBAL_37.png" /> 04 SAN CRISTOBAL — 03 SAN CRISTOBAL'
            });
var format_03SANTAFE_38 = new ol.format.GeoJSON();
var features_03SANTAFE_38 = format_03SANTAFE_38.readFeatures(json_03SANTAFE_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03SANTAFE_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03SANTAFE_38.addFeatures(features_03SANTAFE_38);
var lyr_03SANTAFE_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03SANTAFE_38,
maxResolution:15.402456383744077,
 
                style: style_03SANTAFE_38,
                popuplayertitle: '03 SANTA FE',
                interactive: true,
                title: '<img src="styles/legend/03SANTAFE_38.png" /> 03 SANTA FE'
            });
var format_02CHAPINERO_39 = new ol.format.GeoJSON();
var features_02CHAPINERO_39 = format_02CHAPINERO_39.readFeatures(json_02CHAPINERO_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02CHAPINERO_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02CHAPINERO_39.addFeatures(features_02CHAPINERO_39);
var lyr_02CHAPINERO_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02CHAPINERO_39,
maxResolution:15.402456383744077,
 
                style: style_02CHAPINERO_39,
                popuplayertitle: '02 CHAPINERO',
                interactive: true,
                title: '<img src="styles/legend/02CHAPINERO_39.png" /> 02 CHAPINERO'
            });
var format_01USAQUEN_40 = new ol.format.GeoJSON();
var features_01USAQUEN_40 = format_01USAQUEN_40.readFeatures(json_01USAQUEN_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01USAQUEN_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01USAQUEN_40.addFeatures(features_01USAQUEN_40);
var lyr_01USAQUEN_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01USAQUEN_40,
maxResolution:15.402456383744077,
 
                style: style_01USAQUEN_40,
                popuplayertitle: '01 USAQUEN',
                interactive: true,
                title: '<img src="styles/legend/01USAQUEN_40.png" /> 01 USAQUEN'
            });
var group_localidades = new ol.layer.Group({
                                layers: [lyr_19CIUDADBOLIVAR_22,lyr_18RAFAELURIBEURIBE_23,lyr_17CANDELARIA_24,lyr_16PUENTEARANDA_25,lyr_15ANTONIONARIO_26,lyr_14MARTIRES_27,lyr_13TEUSAQUILLO_28,lyr_12BARRIOSUNIDOS_29,lyr_11SUBA_30,lyr_10ENGATIVA_31,lyr_09FONTIBON_32,lyr_08KENNEDY_33,lyr_07BOSABOSA_34,lyr_06TUNJUELITO_35,lyr_05USMEUSME_36,lyr_04SANCRISTOBAL03SANCRISTOBAL_37,lyr_03SANTAFE_38,lyr_02CHAPINERO_39,lyr_01USAQUEN_40,],
                                fold: 'close',
                                title: 'localidades'});
var group_layout = new ol.layer.Group({
                                layers: [lyr_20SUMAPAZ_2,lyr_19CIUDADBOLIVAR_3,lyr_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4,lyr_17CANDELARIA_5,lyr_16PUENTEARANDAPUENTEARANDA_6,lyr_15ANTONIONARIO_7,lyr_14MARTIRES_8,lyr_13TEUSAQUILLO_9,lyr_12BARRIOSUNIDOS_10,lyr_11SUBA_11,lyr_10ENGATIVA_12,lyr_09FONTIBON_13,lyr_08KENNEDY_14,lyr_07BOSA_15,lyr_06TUNJUELITO_16,lyr_05USME_17,lyr_04SANCRISTOBAL_18,lyr_03SANTAFE_19,lyr_02CHAPINERO_20,lyr_01USAQUEN_21,],
                                fold: 'close',
                                title: 'layout'});
var group_base = new ol.layer.Group({
                                layers: [lyr_ESRIGraylight_0,lyr_pvoBTApvo_1,],
                                fold: 'close',
                                title: 'base'});

lyr_ESRIGraylight_0.setVisible(true);lyr_pvoBTApvo_1.setVisible(true);lyr_20SUMAPAZ_2.setVisible(true);lyr_19CIUDADBOLIVAR_3.setVisible(true);lyr_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4.setVisible(true);lyr_17CANDELARIA_5.setVisible(true);lyr_16PUENTEARANDAPUENTEARANDA_6.setVisible(true);lyr_15ANTONIONARIO_7.setVisible(true);lyr_14MARTIRES_8.setVisible(true);lyr_13TEUSAQUILLO_9.setVisible(true);lyr_12BARRIOSUNIDOS_10.setVisible(true);lyr_11SUBA_11.setVisible(true);lyr_10ENGATIVA_12.setVisible(true);lyr_09FONTIBON_13.setVisible(true);lyr_08KENNEDY_14.setVisible(true);lyr_07BOSA_15.setVisible(true);lyr_06TUNJUELITO_16.setVisible(true);lyr_05USME_17.setVisible(true);lyr_04SANCRISTOBAL_18.setVisible(true);lyr_03SANTAFE_19.setVisible(true);lyr_02CHAPINERO_20.setVisible(true);lyr_01USAQUEN_21.setVisible(true);lyr_19CIUDADBOLIVAR_22.setVisible(true);lyr_18RAFAELURIBEURIBE_23.setVisible(true);lyr_17CANDELARIA_24.setVisible(true);lyr_16PUENTEARANDA_25.setVisible(true);lyr_15ANTONIONARIO_26.setVisible(true);lyr_14MARTIRES_27.setVisible(true);lyr_13TEUSAQUILLO_28.setVisible(true);lyr_12BARRIOSUNIDOS_29.setVisible(true);lyr_11SUBA_30.setVisible(true);lyr_10ENGATIVA_31.setVisible(true);lyr_09FONTIBON_32.setVisible(true);lyr_08KENNEDY_33.setVisible(true);lyr_07BOSABOSA_34.setVisible(true);lyr_06TUNJUELITO_35.setVisible(true);lyr_05USMEUSME_36.setVisible(true);lyr_04SANCRISTOBAL03SANCRISTOBAL_37.setVisible(true);lyr_03SANTAFE_38.setVisible(true);lyr_02CHAPINERO_39.setVisible(true);lyr_01USAQUEN_40.setVisible(true);
var layersList = [group_base,group_layout,group_localidades];
lyr_pvoBTApvo_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'PVONPUES_1': 'PVONPUES_1', 'Resultado-NSS_Código Puesto': 'Resultado-NSS_Código Puesto', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Código Comuna': 'Resultado-NSS_Código Comuna', 'Resultado-NSS_Nombre Comuna': 'Resultado-NSS_Nombre Comuna', 'Resultado-NSS_Nombre Partido': 'Resultado-NSS_Nombre Partido', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_20SUMAPAZ_2.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_19CIUDADBOLIVAR_3.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_17CANDELARIA_5.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_16PUENTEARANDAPUENTEARANDA_6.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_15ANTONIONARIO_7.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_14MARTIRES_8.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_13TEUSAQUILLO_9.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_12BARRIOSUNIDOS_10.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_11SUBA_11.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_10ENGATIVA_12.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_09FONTIBON_13.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_08KENNEDY_14.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_07BOSA_15.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_06TUNJUELITO_16.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_05USME_17.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_04SANCRISTOBAL_18.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_03SANTAFE_19.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_02CHAPINERO_20.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_01USAQUEN_21.set('fieldAliases', {'Nombre de la localidad': 'Nombre de la localidad', 'Area de la localidad': 'Area de la localidad', 'Identificador unico de la localidad': 'Identificador unico de la localidad', });
lyr_19CIUDADBOLIVAR_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_18RAFAELURIBEURIBE_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_17CANDELARIA_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_16PUENTEARANDA_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_15ANTONIONARIO_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_14MARTIRES_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_13TEUSAQUILLO_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_12BARRIOSUNIDOS_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_11SUBA_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Comuna': 'Resultado-NSS_Nombre Comuna', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_10ENGATIVA_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_09FONTIBON_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_08KENNEDY_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_07BOSABOSA_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_06TUNJUELITO_35.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_05USMEUSME_36.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_04SANCRISTOBAL03SANCRISTOBAL_37.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_03SANTAFE_38.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_02CHAPINERO_39.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_01USAQUEN_40.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOCCODIGO': 'LOCCODIGO', 'LOCNOMBRE': 'LOCNOMBRE', 'PVODIRECCI': 'PVODIRECCI', 'PVONSITIO': 'PVONSITIO', 'PVONOMBRE': 'PVONOMBRE', 'PVONPUESTO': 'PVONPUESTO', 'PVOCODIGO': 'PVOCODIGO', 'Resultado-NSS_Mesa': 'Resultado-NSS_Mesa', 'Resultado-NSS_Nombre Candidato': 'Resultado-NSS_Nombre Candidato', 'Resultado-NSS_Total Votos': 'Resultado-NSS_Total Votos', });
lyr_pvoBTApvo_1.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'PVONPUES_1': 'TextEdit', 'Resultado-NSS_Código Puesto': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Código Comuna': 'Range', 'Resultado-NSS_Nombre Comuna': 'TextEdit', 'Resultado-NSS_Nombre Partido': 'TextEdit', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_20SUMAPAZ_2.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_19CIUDADBOLIVAR_3.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_17CANDELARIA_5.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_16PUENTEARANDAPUENTEARANDA_6.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_15ANTONIONARIO_7.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_14MARTIRES_8.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_13TEUSAQUILLO_9.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_12BARRIOSUNIDOS_10.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_11SUBA_11.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_10ENGATIVA_12.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_09FONTIBON_13.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_08KENNEDY_14.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_07BOSA_15.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_06TUNJUELITO_16.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_05USME_17.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_04SANCRISTOBAL_18.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_03SANTAFE_19.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_02CHAPINERO_20.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_01USAQUEN_21.set('fieldImages', {'Nombre de la localidad': 'TextEdit', 'Area de la localidad': 'TextEdit', 'Identificador unico de la localidad': 'TextEdit', });
lyr_19CIUDADBOLIVAR_22.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_18RAFAELURIBEURIBE_23.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_17CANDELARIA_24.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_16PUENTEARANDA_25.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_15ANTONIONARIO_26.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_14MARTIRES_27.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_13TEUSAQUILLO_28.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_12BARRIOSUNIDOS_29.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_11SUBA_30.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Comuna': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_10ENGATIVA_31.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_09FONTIBON_32.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_08KENNEDY_33.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_07BOSABOSA_34.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_06TUNJUELITO_35.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_05USMEUSME_36.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_04SANCRISTOBAL03SANCRISTOBAL_37.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_03SANTAFE_38.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_02CHAPINERO_39.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_01USAQUEN_40.set('fieldImages', {'OBJECTID': 'Range', 'LOCCODIGO': 'TextEdit', 'LOCNOMBRE': 'TextEdit', 'PVODIRECCI': 'TextEdit', 'PVONSITIO': 'TextEdit', 'PVONOMBRE': 'TextEdit', 'PVONPUESTO': 'Range', 'PVOCODIGO': 'TextEdit', 'Resultado-NSS_Mesa': 'Range', 'Resultado-NSS_Nombre Candidato': 'TextEdit', 'Resultado-NSS_Total Votos': 'Range', });
lyr_pvoBTApvo_1.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'PVONPUES_1': 'no label', 'Resultado-NSS_Código Puesto': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Código Comuna': 'no label', 'Resultado-NSS_Nombre Comuna': 'no label', 'Resultado-NSS_Nombre Partido': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_20SUMAPAZ_2.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_19CIUDADBOLIVAR_3.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_18RAFAELURIBEURIBE189RAFAELURIBEURIBE_4.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_17CANDELARIA_5.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_16PUENTEARANDAPUENTEARANDA_6.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_15ANTONIONARIO_7.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_14MARTIRES_8.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_13TEUSAQUILLO_9.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_12BARRIOSUNIDOS_10.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_11SUBA_11.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_10ENGATIVA_12.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_09FONTIBON_13.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_08KENNEDY_14.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_07BOSA_15.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_06TUNJUELITO_16.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_05USME_17.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_04SANCRISTOBAL_18.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_03SANTAFE_19.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_02CHAPINERO_20.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_01USAQUEN_21.set('fieldLabels', {'Nombre de la localidad': 'no label', 'Area de la localidad': 'no label', 'Identificador unico de la localidad': 'no label', });
lyr_19CIUDADBOLIVAR_22.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_18RAFAELURIBEURIBE_23.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_17CANDELARIA_24.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_16PUENTEARANDA_25.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_15ANTONIONARIO_26.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_14MARTIRES_27.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_13TEUSAQUILLO_28.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_12BARRIOSUNIDOS_29.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_11SUBA_30.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Comuna': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_10ENGATIVA_31.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_09FONTIBON_32.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_08KENNEDY_33.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_07BOSABOSA_34.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_06TUNJUELITO_35.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_05USMEUSME_36.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_04SANCRISTOBAL03SANCRISTOBAL_37.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_03SANTAFE_38.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_02CHAPINERO_39.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_01USAQUEN_40.set('fieldLabels', {'OBJECTID': 'no label', 'LOCCODIGO': 'no label', 'LOCNOMBRE': 'no label', 'PVODIRECCI': 'no label', 'PVONSITIO': 'no label', 'PVONOMBRE': 'no label', 'PVONPUESTO': 'no label', 'PVOCODIGO': 'no label', 'Resultado-NSS_Mesa': 'no label', 'Resultado-NSS_Nombre Candidato': 'no label', 'Resultado-NSS_Total Votos': 'no label', });
lyr_01USAQUEN_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});