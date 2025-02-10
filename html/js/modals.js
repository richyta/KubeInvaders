/*
 * Copyright 2024 KubeInvaders Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

/* Modals Switches */

function setModalState(state) {
  modal_opened = state;
}

function showKubePingModal() {
  if (!kubeping_sent) {
    $('#kubePingModal').modal('show');
  }

  $('#kubePingModal').on('shown.bs.modal', function () {
    setModalState(true);
  });
  
}

function closeKubePingModal() {
  $('#kubePingModal').modal('hide');
  setModalState(false);
}

function showCurrentChaosContainer() {
  getCurrentChaosContainer();
  $('#currentChaosContainerModal').modal('show');
  setModalState(true);
}

function closeCurrentChaosJobModal() {
  $('#currentChaosContainerModal').modal('hide');
  setModalState(false);
}

function showSetCurrentChaosContainer() {
  if (is_demo_mode()) {
    demo_mode_alert();
    return;
  }
  $('#alert_placeholder2').text('');
  getCurrentChaosContainer();
  $('#setChaosContainerModal').modal('show');
  setModalState(true);
}

function closeSetChaosContainerModal() {
  $('#setChaosContainerModal').modal('hide');
  setModalState(false);
}

function closeSpecialKeysModal() {
  $('#showSpecialKeysModal').modal('hide');
  setModalState(false);
}

function closeKubeLinterModal() {
  $('#kubeLinterModal').modal('hide');
  setModalState(false);
}

function closeSetLoadTestModal() {
  $('#setLoadTestModal').modal('hide');
  setModalState(false);
}

function wrapShowPrepareChaosReportModal(checkbox) {
  let close_button = document.getElementById("closeButtonReport");
  close_button.innerHTML = "Close";
  showPrepareChaosReportModal(checkbox)
}

function showPrepareChaosReportModal(checkbox) {
  if(checkbox.checked){
    $('#kubePingModal').on('shown.bs.modal', function () {
      setModalState(true);
    });
    $('#prepareChaosReportModal').modal('show');
    $("#chaosReportHeader").text("Select Ingress - Namespace:" + namespace);
    setCodeNameToTextInput("chaosReportAuthor");
    setCodeNameToTextInput("chaosReportProject");
    setModalState(true);
    chaosReportHttpEndpointAdd();
    getIngressLists();
    //$("#httpStatsCanvasDiv").style.display = "block";
  } else {
    closePrepareChaosReportModal();
  }
}

function closePrepareChaosReportModal() {
  $('#prepareChaosReportModal').modal('hide');
  document.getElementById("flagChaosReport").checked = false;
  setModalState(false);
  kubePingModalSwitch();
}

function closePrepareChaosReportModalAndUncheck() {
  $('#prepareChaosReportModal').modal('hide');
  document.getElementById("flagChaosReport").checked = false;
  setModalState(false);
  kubePingModalSwitch();
}