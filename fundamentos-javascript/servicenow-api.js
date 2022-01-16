/*
XMLHttpRequest: https://xhr.spec.whatwg.org/#dom-xmlhttprequest-setrequestheader
*/

let shortDescription = document.querySelector('#short_description').value;
let description = document.querySelector('#description').value;
let btnGerarINC = document.querySelector('#gerar-inc');

btnGerarINC.addEventListener('click', function () {
    executeRequest();
});

function executeRequest() {
    let body = {
        "variables": {
            "short_description": "${shortDescription}",
            "contact_phone": "21982958364",
            "request_for": "7d00bdc41bbbd810b4572170f54bcb9b",
            "description": "${description}",
            "contact_type_": "Automatic",
            "globo_internal": "false",
            "end_costumer": "true",
            "advertising_market": "false",
            "legal_regulatory": "false",
            "error_type": "Aplicação indisponível",
            "requester": "7d00bdc41bbbd810b4572170f54bcb9b",
            "include_people": "false",
            "what_the_volume_users_impacted": "Afeta apenas um usuário",
            "cmdb_ci": "4decbcf31b9ad01097c0dca0f54bcbe9",
            "application_type": "Corporativos",
            "application_not_found": "false",
            "describe_application": "",
            "which_products_are_being_affected": "",
            "business_service": "26b79b3f1b261810355786afe54bcb79",
            "esta_em_home_office": "No",
            "business_impact": "Teste impacto para o negócio",
            "request_to_whom": "Esta solicitação é para mim",
            "algum_evento_ou_programa_e_afetado_por_esse_erro": "Não",
            "category": "applications"
        },
        "get_portal_messages": "true",
        "sysparm_no_validation": "true"
    };

    const url = 'https://devgloboservice.service-now.com/api/sn_sc/servicecatalog/items/6c31d510db189050fa11cf241496199c/submit_producer';

    /* const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
    NÃO PRECISA DECLARAR QUANDO O CÓDIGO IRÁ RODAR NO NAVEGADOR */

    const request = new XMLHttpRequest();

    request.open('POST', url, true, 'vimartin', 'Vspkmart7@');
    //request.open('POST', `https://cors-anywhere.herokuapp.com/${url}`, true, 'vimartin', 'Vspkmart7@');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Methods', 'POST');
    request.setRequestHeader('Access-Control-Allow-Headers', '*');

    request.onload = function () {
        if (request.status === 200) {
            console.log(`
        Status: ${request.status} - ${request.statusText}
        Response:
        ${request.responseText}
        `);
        } else {
            console.log(`
        Ocorreu um erro!
        Status: ${request.status} - ${request.statusText}
        `);
        }
    }
    request.send(JSON.stringify(body));
}



