(function() {
    var functions = document.querySelectorAll('[data-name]');
    var sections = document.querySelectorAll('.searchable_section');
    var methodLinks = document.querySelectorAll('.searchable_section a');
    var searchInput = document.getElementById('function_filter');
    var docWrap = document.getElementById('doc_wrap');
    var versionSelect = document.querySelector('#version_select');

    versionSelect.onchange = function() {
      window.location.href = this.value;
    }

    setDocWrapHeight();
    window.onresize = setDocWrapHeight;

    function setDocWrapHeight() {
      var winHeight=0;
      if (window.innerHeight){
        winHeight = window.innerHeight;
      }
      else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
      }
      docWrap.style.height = (winHeight - 48 || 760) + 'px';
    }

    fn.forEach(methodLinks, function(lk) {
      lk.addEventListener('click', function(e) {
        var elId = lk.getAttribute('href');
        var viewEl = document.querySelector(elId);
        viewEl.scrollIntoView({block: "start"});
        if ( e && e.preventDefault ) {
          e.preventDefault(); 
        } else {
          window.event.returnValue = false; 
        }
      });
    });
  
    function searchValue() {
      return searchInput.value.trim().replace(/\./, '');
    }
  
    function doesMatch(element) {
      var name = element.getAttribute('data-name');
      return fn.contains(name.toLowerCase(), searchValue().toLowerCase());
    }
  
    function filterElement(element) {
      element.style.display = doesMatch(element) ? '' : 'none';
    }
  
    function filterToc() {
      fn.forEach(functions, filterElement);
  
      var emptySearch = searchValue() === '';
  
      // Hide the titles of empty sections
      fn.forEach(sections, function(section) {
        var sectionFunctions = section.querySelectorAll('[data-name]');
        var secsArr = [].slice.call(sectionFunctions);
        var showSection = emptySearch || secsArr.some(doesMatch);
        section.style.display = showSection ? 'block' : 'none';
      });
    }
  
    function gotoFirst() {
      var firstFunction = functions.filter(doesMatch)[0];
      if (firstFunction) {
        window.location.hash = firstFunction.getAttribute('data-name');
        searchInput.focus();
      }
    }
  
    searchInput.addEventListener('input', filterToc, false);
  
    // Press "Enter" to jump to the first matching function
    searchInput.addEventListener('keypress', function(e) {
      if (e.which === 13) {
        gotoFirst();
      }
    });
  
    // Press "/" to search
    document.body.addEventListener('keyup', function(event) {
      if (191 === event.which) {
        searchInput.focus();
      }
    });
  }());
  
