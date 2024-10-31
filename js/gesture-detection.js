AFRAME.registerComponent('gesture-detection', {
  init: function () {
    /*const handEl = this.el;  // El elemento que representa la mano
    const textEl = document.querySelector('#gesture-text');

    // Detectar el estado de los dedos
    handEl.addEventListener('hand-tracking-ready', function (evt) {
      handEl.addEventListener('hand-tracking-updated', function (evt) {
        const gesture = checkThumbsUp(evt.detail.inputSource);
        if (gesture) {
          textEl.setAttribute('visible', true); // Mostrar el texto
        } else {
          textEl.setAttribute('visible', false); // Ocultar el texto
        }
      });
    });

    // Función para verificar si se hace el gesto de pulgar arriba
    function checkThumbsUp(inputSource) {
      const thumbTip = inputSource.hand.get('thumb-tip');
      const indexTip = inputSource.hand.get('index-finger-tip');
      // Aquí deberías implementar la lógica para detectar el gesto exacto
      return thumbTip && indexTip && thumbTip.position.y > indexTip.position.y;
    }*/
  }
});
