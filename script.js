/* Osíris — comportamento do painel de demonstração.
   Um único momento de movimento: a abertura do protocolo. */

(function () {
  'use strict';

  var painel     = document.getElementById('painel');
  var aguardando = document.getElementById('aguardando');
  var registro   = document.getElementById('registro');
  var btnLer     = document.getElementById('ler');
  var btnVoltar  = document.getElementById('reiniciar');
  var elProto    = document.getElementById('protocolo');
  var elHora     = document.getElementById('hora');

  if (!painel) return;

  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem I, O, 0 e 1

  function sortearProtocolo() {
    var s = '';
    var n = new Uint8Array(6);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(n);
      for (var i = 0; i < 6; i++) s += ALFABETO[n[i] % ALFABETO.length];
    } else {
      for (var j = 0; j < 6; j++) s += ALFABETO[Math.floor(Math.random() * ALFABETO.length)];
    }
    return 'EMG-' + s;
  }

  function agora() {
    var d = new Date();
    var p = function (v) { return String(v).padStart(2, '0'); };
    return p(d.getDate()) + '/' + p(d.getMonth() + 1) + ' às ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }

  function revelarCampos() {
    if (semMovimento) return;
    var itens = registro.querySelectorAll('.campo, .identificacao, .auditoria');
    Array.prototype.forEach.call(itens, function (el, i) {
      el.animate(
        [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
        { duration: 300, delay: 90 + i * 70, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'backwards' }
      );
    });
  }

  function abrir() {
    elProto.textContent = sortearProtocolo();
    elHora.textContent = agora();
    aguardando.hidden = true;
    registro.hidden = false;
    painel.dataset.estado = 'aberto';
    revelarCampos();
    btnVoltar.focus({ preventScroll: true });
  }

  function fechar() {
    registro.hidden = true;
    aguardando.hidden = false;
    painel.dataset.estado = 'aguardando';
    btnLer.focus({ preventScroll: true });
  }

  btnLer.addEventListener('click', abrir);
  btnVoltar.addEventListener('click', fechar);

  /* Rótulos da tabela de vetores quando ela colapsa em telas estreitas */
  var tabela = document.querySelector('.vetores table');
  if (tabela) {
    var titulos = Array.prototype.map.call(
      tabela.querySelectorAll('thead th'),
      function (th) { return th.textContent.trim(); }
    );
    Array.prototype.forEach.call(tabela.querySelectorAll('tbody tr'), function (tr) {
      Array.prototype.forEach.call(tr.querySelectorAll('td'), function (td, i) {
        td.setAttribute('data-r', titulos[i + 1] ? titulos[i + 1] + ': ' : '');
      });
    });
  }

  /* Destaque da seção corrente na navegação */
  var links = document.querySelectorAll('.topo nav a');
  if (links.length && 'IntersectionObserver' in window) {
    var porId = {};
    Array.prototype.forEach.call(links, function (a) { porId[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        var a = porId[e.target.id];
        if (!a) return;
        if (e.isIntersecting) {
          Array.prototype.forEach.call(links, function (x) { x.style.color = ''; x.style.borderBottomColor = ''; });
          a.style.color = 'var(--verde)';
          a.style.borderBottomColor = 'var(--verde)';
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('section[id]'), function (s) { obs.observe(s); });
  }
})();
