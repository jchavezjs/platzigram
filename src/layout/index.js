var yo = require('yo-yo');

module.exports = function layout(content) {
  return yo`<div id="wrap">
    <nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m1">
              <a href="/" class="brand-logo platzigram">Platzigram</a>
            </div>
            <div class="col s2 m6 push-m10">
              <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-users">
                <i class="fa fa-user" aria-hidden="true"></i>
              </a>
              <ul id="drop-users" class="dropdown-content">
                <li><a href="#">Salir</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <article class="content">
      ${content}
    </article>
    </div>`;
}
