

import { S8 } from "/S8-api/S8Context.js";
import { S8Object } from "/S8-api/S8Object.js";

import { PaperColumn } from "./PaperColumn.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";


S8.page.CSS_import('/S8-fwks-palm/boxes/paper/PaperStruct.css');



/**
 * 
 */
export class PaperColumnsStruct extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;


    /** */
    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("paperstruct-columns");
    }


    /** @returns */
    getEnvelope() {
        return this.wrapperNode;
    }



    /** @returns{S8Object[]} */
    getComponents() {
        return this.columns;
    }



    /** @param {PaperColumn[]} columns */
    S8_set_columns(columns) {
        this.columns = columns;
        S8WebFront.setS8Elements(this.wrapperNode, columns);
    }


    /** render */
    S8_render() { }


    /** dispose */
    S8_dispose() { }
}