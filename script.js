/* ===== Classroom Seat Planner - Full Application ===== */
const App = {};

/* ===== I18n ===== */
const LANG = {
  ko: {
    appName:'Classroom Seat Planner',dashboard:'Dashboard',projects:'Projects',layout:'Layout Editor',
    students:'Students',generator:'Generator',history:'History',settings:'Settings',
    newProject:'New Project',manageStudents:'Manage Students',editLayout:'Edit Layout',
    generateSeating:'Generate Seating',studentDatabase:'Student Database',
    noProject:'No project selected',search:'Search...',save:'Save',cancel:'Cancel',
    delete:'Delete',rename:'Rename',duplicate:'Duplicate',create:'Create',
    add:'Add',edit:'Edit',close:'Close',export:'Export',import:'Import',
    clearAll:'Clear All',resetAll:'Reset All Data',autoSave:'Auto Save',
    confirm:'Are you sure?',yes:'Yes',no:'No',name:'Name',
    addStudent:'Add Student',editStudent:'Edit Student',
    bulkImport:'Bulk Import',bulkImportHint:'Enter one name per line',
    exportJson:'Export JSON',importJson:'Import JSON',
    generate:'Generate Seating',clearSeating:'Clear Seating',
    createProject:'Create Project',projectName:'Project Name',
    rows:'Rows',cols:'Cols',empty:'Empty',desk:'Desk',teacher:'Teacher',
    wall:'Wall',door:'Door',grid:'Grid',templates:'Templates...',
    rowsStandard:'Standard Rows',exam:'Exam Layout',uShape:'U Shape',
    groups:'Group Tables',computer:'Computer Lab',lecture:'Lecture Hall',
    elementary:'Elementary Classroom',zoneEditor:'Zone Editor',
    addZone:'Add Zone',zoneName:'Zone Name',maleOnly:'Male Only',
    femaleOnly:'Female Only',mixed:'Mixed',noRestriction:'No Restriction',
    studentsAssigned:'Assigned Students',totalStudents:'Total Students',
    totalDesks:'Total Desks',emptySeats:'Empty Seats',occupancy:'Occupancy',
    lastGenerated:'Last Generated',totalProjects:'Total Projects',
    light:'Light',dark:'Dark',language:'Language',dataManagement:'Data Management',
    exportAll:'Export All Data (JSON)',importAll:'Import All Data (JSON)',
    rules:'Rules',addRule:'Add Rule',keepTogether:'Keep together',
    separate:'Separate',avoidFront:'Avoid front row',preferFront:'Prefer front row',
    avoidBack:'Avoid back row',preferBack:'Prefer back row',
    avoidLeft:'Avoid left side',preferLeft:'Prefer left side',
    avoidRight:'Avoid right side',preferRight:'Prefer right side',
    saved:'Saved',error:'Error',success:'Success',warning:'Warning',
    noProjects:'No projects yet. Create your first project!',
    noStudents:'No students in database yet.',
    noHistory:'No seating history yet.',
    seatLocked:'Seat locked',seatUnlocked:'Seat unlocked',
    seatingGenerated:'Seating generated successfully!',
    projectCreated:'Project created',projectDeleted:'Project deleted',
    projectDuplicated:'Project duplicated',studentAdded:'Student added',
    studentDeleted:'Student deleted',layoutSaved:'Layout saved',
    text:'Text',studentsInClass:'Students in Class',
    addFromDb:'Add from Database',remove:'Remove',searchStudents:'Search students...',
    showZones:'Show Zones',editZones:'Edit Zones',
    lock:'Lock',unlock:'Unlock',restore:'Restore',
    notes:'Notes',quickActions:'Quick Actions',
    keyboardShortcuts:'Keyboard Shortcuts',
    undo:'Undo',redo:'Redo',navViews:'Navigate views',
    generateShortcut:'Generate seating',saveShortcut:'Save layout',
    confettiEffect:'Confetti Effect',seatNumbering:'Seat Numbering',
    animations:'Animations',favoriteStudents:'Favorite Students',
    seatingStats:'Seating Statistics',
    assignStudents:'First, assign students to this project from the Student Database.',
    noDesks:'No desks found in layout. Add desks in Layout Editor.',
    importWarning:'This will overwrite all existing data. Continue?',
    importSuccess:'Data imported successfully.',
  },
  en: {
    appName:'Classroom Seat Planner',dashboard:'Dashboard',projects:'Projects',
    layout:'Layout Editor',students:'Students',generator:'Generator',
    history:'History',settings:'Settings',
    newProject:'New Project',manageStudents:'Manage Students',
    editLayout:'Edit Layout',generateSeating:'Generate Seating',
    studentDatabase:'Student Database',noProject:'No project selected',
    search:'Search...',save:'Save',cancel:'Cancel',delete:'Delete',
    rename:'Rename',duplicate:'Duplicate',create:'Create',add:'Add',
    edit:'Edit',close:'Close',export:'Export',import:'Import',
    clearAll:'Clear All',resetAll:'Reset All Data',autoSave:'Auto Save',
    confirm:'Are you sure?',yes:'Yes',no:'No',name:'Name',
    addStudent:'Add Student',editStudent:'Edit Student',
    bulkImport:'Bulk Import',bulkImportHint:'Enter one name per line',
    exportJson:'Export JSON',importJson:'Import JSON',
    generate:'Generate Seating',clearSeating:'Clear Seating',
    createProject:'Create Project',projectName:'Project Name',
    rows:'Rows',cols:'Cols',empty:'Empty',desk:'Desk',teacher:'Teacher',
    wall:'Wall',door:'Door',grid:'Grid',templates:'Templates...',
    rowsStandard:'Standard Rows',exam:'Exam Layout',uShape:'U Shape',
    groups:'Group Tables',computer:'Computer Lab',lecture:'Lecture Hall',
    elementary:'Elementary Classroom',zoneEditor:'Zone Editor',
    addZone:'Add Zone',zoneName:'Zone Name',maleOnly:'Male Only',
    femaleOnly:'Female Only',mixed:'Mixed',noRestriction:'No Restriction',
    studentsAssigned:'Assigned Students',totalStudents:'Total Students',
    totalDesks:'Total Desks',emptySeats:'Empty Seats',occupancy:'Occupancy',
    lastGenerated:'Last Generated',totalProjects:'Total Projects',
    light:'Light',dark:'Dark',language:'Language',dataManagement:'Data Management',
    exportAll:'Export All Data (JSON)',importAll:'Import All Data (JSON)',
    rules:'Rules',addRule:'Add Rule',keepTogether:'Keep together',
    separate:'Separate',avoidFront:'Avoid front row',preferFront:'Prefer front row',
    avoidBack:'Avoid back row',preferBack:'Prefer back row',
    avoidLeft:'Avoid left side',preferLeft:'Prefer left side',
    avoidRight:'Avoid right side',preferRight:'Prefer right side',
    saved:'Saved',error:'Error',success:'Success',warning:'Warning',
    noProjects:'No projects yet. Create your first project!',
    noStudents:'No students in database yet.',
    noHistory:'No seating history yet.',
    seatLocked:'Seat locked',seatUnlocked:'Seat unlocked',
    seatingGenerated:'Seating generated successfully!',
    projectCreated:'Project created',projectDeleted:'Project deleted',
    projectDuplicated:'Project duplicated',studentAdded:'Student added',
    studentDeleted:'Student deleted',layoutSaved:'Layout saved',
    text:'Text',studentsInClass:'Students in Class',
    addFromDb:'Add from Database',remove:'Remove',searchStudents:'Search students...',
    showZones:'Show Zones',editZones:'Edit Zones',
    lock:'Lock',unlock:'Unlock',restore:'Restore',
    notes:'Notes',quickActions:'Quick Actions',
    keyboardShortcuts:'Keyboard Shortcuts',
    undo:'Undo',redo:'Redo',navViews:'Navigate views',
    generateShortcut:'Generate seating',saveShortcut:'Save layout',
    confettiEffect:'Confetti Effect',seatNumbering:'Seat Numbering',
    animations:'Animations',favoriteStudents:'Favorite Students',
    seatingStats:'Seating Statistics',
    assignStudents:'First, assign students to this project from the Student Database.',
    noDesks:'No desks found in layout. Add desks in Layout Editor.',
    importWarning:'This will overwrite all existing data. Continue?',
    importSuccess:'Data imported successfully.',
  }
};

/* ===== UTILITY FUNCTIONS ===== */
App.util = {
  uid(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)},
  clone(o){return JSON.parse(JSON.stringify(o))},
  debounce(fn,ms=300){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms)}},
  saveToFile(data,filename,type='application/json'){
    const blob=new Blob([data],{type});const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);a.download=filename;a.click();
    URL.revokeObjectURL(a.href);
  },
  readFile(){return new Promise((res,rej)=>{
    const inp=document.createElement('input');inp.type='file';inp.accept='.json';
    inp.onchange=e=>{const f=e.target.files[0];if(!f)return rej();const r=new FileReader();
      r.onload=ev=>res(ev.target.result);r.onerror=rej;r.readAsText(f)};
    inp.click();
  })},
  formatDate(ts){const d=new Date(ts);
    return d.getFullYear()+'-'+(d.getMonth()+1).toString().padStart(2,'0')+'-'+d.getDate().toString().padStart(2,'0')+' '+d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0')
  },
  formatDateShort(ts){const d=new Date(ts);
    return (d.getMonth()+1)+'/'+d.getDate()+' '+d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0')
  }
};

/* ===== I18n Helper ===== */
function __(key){const lang=App._state.settings.language||'ko';return LANG[lang]&&LANG[lang][key]?LANG[lang][key]:LANG.ko[key]||key}

/* ===== STATE MANAGEMENT ===== */
App._state = {
  projects: [],
  students: [],
  currentProjectId: null,
  currentView: 'dashboard',
  settings: { theme:'light', autoSave:true, animations:true, seatNumbers:false, confetti:true, language:'ko' },
  editingZoneId: null,
  sidebarCollapsed: false,
  _version: 2
};
App._undoStack = [];
App._redoStack = [];
App._maxUndo = 30;
App._saveTimer = null;
App._dirty = false;

App.data = {
  save(){
    try {
      const data = App.util.clone(App._state);
      data._version = 2;
      localStorage.setItem('classroomSeatPlanner', JSON.stringify(data));
      localStorage.setItem('classroomSeatPlannerUndo', JSON.stringify(App._undoStack.slice(-App._maxUndo)));
      localStorage.setItem('classroomSeatPlannerRedo', JSON.stringify(App._redoStack.slice(-App._maxUndo)));
      App._dirty = false;
      document.getElementById('saveStatusText').textContent = __('saved');
    } catch(e) { console.warn('Save failed:', e); }
  },
  load(){
    try {
      const raw = localStorage.getItem('classroomSeatPlanner');
      if (raw) {
        const data = JSON.parse(raw);
        Object.assign(App._state, data);
      }
      const undo = localStorage.getItem('classroomSeatPlannerUndo');
      if (undo) App._undoStack = JSON.parse(undo) || [];
      const redo = localStorage.getItem('classroomSeatPlannerRedo');
      if (redo) App._redoStack = JSON.parse(redo) || [];
    } catch(e) { console.warn('Load failed:', e); }
  },
  autoSave(){
    if (!App._state.settings.autoSave) return;
    App._dirty = true;
    clearTimeout(App._saveTimer);
    App._saveTimer = setTimeout(() => App.data.save(), 500);
  },
  pushUndo(){
    const snapshot = App.util.clone({
      projects: App._state.projects,
      currentProjectId: App._state.currentProjectId,
      settings: App._state.settings
    });
    App._undoStack.push(snapshot);
    if (App._undoStack.length > App._maxUndo) App._undoStack.shift();
    App._redoStack = [];
  },
  undo(){
    if (!App._undoStack.length) return;
    const snapshot = App.util.clone({
      projects: App._state.projects,
      currentProjectId: App._state.currentProjectId,
      settings: App._state.settings
    });
    App._redoStack.push(snapshot);
    const prev = App._undoStack.pop();
    App._state.projects = prev.projects;
    App._state.currentProjectId = prev.currentProjectId;
    App._state.settings = prev.settings;
    App.data.autoSave();
    App._refreshAll();
  },
  redo(){
    if (!App._redoStack.length) return;
    const snapshot = App.util.clone({
      projects: App._state.projects,
      currentProjectId: App._state.currentProjectId,
      settings: App._state.settings
    });
    App._undoStack.push(snapshot);
    const next = App._redoStack.pop();
    App._state.projects = next.projects;
    App._state.currentProjectId = next.currentProjectId;
    App._state.settings = next.settings;
    App.data.autoSave();
    App._refreshAll();
  }
};

function getProject(){return App._state.projects.find(p=>p.id===App._state.currentProjectId)}
function getProjectById(id){return App._state.projects.find(p=>p.id===id)}
function getStudent(id){return App._state.students.find(s=>s.id===id)}
function getStudentByName(name){return App._state.students.find(s=>s.name===name)}

/* ===== TOAST ===== */
App.toast = {
  show(msg, type='success', duration=3000){
    const c=document.getElementById('toastContainer');
    const t=document.createElement('div');t.className='toast '+type;
    t.innerHTML='<span>'+msg+'</span>';
    c.appendChild(t);
    setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(100%)';t.style.transition='all 0.3s';setTimeout(()=>t.remove(),300)},duration);
  },
  error(msg){this.show(msg,'error')},
  warning(msg){this.show(msg,'warning')},
  success(msg){this.show(msg,'success')}
};

/* ===== CONFETTI ===== */
App.confetti = {
  fire(count=80){
    if (!App._state.settings.confetti) return;
    const colors=['#4361ee','#f72585','#2ec4b6','#f77f00','#7209b7','#06d6a0','#e63946','#f7b731'];
    for(let i=0;i<count;i++){
      const el=document.createElement('div');el.className='confetti-piece';
      el.style.left=Math.random()*100+'vw';
      el.style.background=colors[Math.floor(Math.random()*colors.length)];
      el.style.width=(Math.random()*6+5)+'px';el.style.height=(Math.random()*6+5)+'px';
      el.style.borderRadius=Math.random()>.5?'50%':'2px';
      el.style.animationDuration=(Math.random()*2+2)+'s';
      el.style.animationDelay=Math.random()*0.5+'s';
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),4000);
    }
  }
};

/* ===== MODAL ===== */
App.modal = {
  open(title, bodyHtml, onConfirm=null){
    document.getElementById('modalTitle').textContent=title;
    document.getElementById('modalBody').innerHTML=bodyHtml;
    document.getElementById('modalOverlay').classList.remove('hidden');
    if(onConfirm){
      const actions=document.createElement('div');actions.className='modal-actions';
      actions.innerHTML='<button class="btn btn-secondary" onclick="App.modal.close()">'+__('cancel')+'</button><button class="btn btn-primary" id="modalConfirmBtn">'+title+'</button>';
      document.getElementById('modalBody').appendChild(actions);
      document.getElementById('modalConfirmBtn').onclick=()=>{onConfirm();App.modal.close()};
    }
  },
  close(e){if(e&&e.target!==e.currentTarget)return;
    document.getElementById('modalOverlay').classList.add('hidden');
    document.getElementById('modalBody').innerHTML='';
  },
  confirm(msg,onYes){
    this.open(__('confirm'),'<p>'+msg+'</p>',()=>{
      if(onYes)onYes();
      this.close();
    });
  }
};

/* ===== NAVIGATION ===== */
App.nav = {
  go(view){
    App._state.currentView = view;
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    const el=document.getElementById('view-'+view);
    if(el)el.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    const navEl=document.querySelector('.nav-item[data-view="'+view+'"]');
    if(navEl)navEl.classList.add('active');
    if(view==='dashboard')App.dashboard.refresh();
    else if(view==='projects')App.projects.renderList();
    else if(view==='layout')App.layout.render();
    else if(view==='students')App.students.renderList();
    else if(view==='generator')App.generator.refresh();
    else if(view==='history')App.history.renderList();
    else if(view==='settings')App.settings.refresh();
  }
};

/* ===== DASHBOARD ===== */
App.dashboard = {
  refresh(){
    const s = App._state;
    const p = getProject();
    const totalStudents = s.students.length;
    const totalProjects = s.projects.length;
    let totalDesks = 0, occupied = 0, lastGen = '-';
    if (p) {
      const cells = p.cells || [];
      for(let r=0;r<cells.length;r++)for(let c=0;c<cells[r].length;c++)if(cells[r][c]===1)totalDesks++;
      const seating = p.seating || {};
      occupied = Object.keys(seating).filter(k=>seating[k]).length;
      if (p.lastGenerated) lastGen = App.util.formatDateShort(p.lastGenerated);
    }
    document.getElementById('dashTotalStudents').textContent = totalStudents;
    document.getElementById('dashTotalDesks').textContent = totalDesks;
    document.getElementById('dashEmptySeats').textContent = totalDesks - occupied;
    document.getElementById('dashOccupancy').textContent = totalDesks > 0 ? Math.round(occupied/totalDesks*100)+'%' : '0%';
    document.getElementById('dashLastGenerated').textContent = lastGen;
    document.getElementById('dashTotalProjects').textContent = totalProjects;
  }
};

/* ===== PROJECTS ===== */
App.projects = {
  create(name){
    if (!name||!name.trim()) return;
    App.data.pushUndo();
    const p = {
      id: App.util.uid(),
      name: name.trim(),
      rows: 10, cols: 10,
      cells: [],
      assignedStudents: [],
      seating: {},
      lockedSeats: [],
      zones: [],
      rules: [],
      history: [],
      notes: '',
      lastGenerated: null,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    p.cells = App.layout._makeEmptyGrid(p.rows, p.cols);
    App._state.projects.push(p);
    App._state.currentProjectId = p.id;
    App.data.autoSave();
    App.projects.renderList();
    App.nav.go('layout');
    App.toast.success(__('projectCreated'));
  },
  showCreateModal(){
    App.modal.open(__('createProject'),
      '<label for="projName">'+__('projectName')+'</label><input type="text" id="projName" placeholder="e.g. Class 1-1" autofocus>'+
      '<label>'+__('grid')+'</label><div style="display:flex;gap:8px"><input type="number" id="projRows" value="10" min="4" max="20" style="width:70px"> × <input type="number" id="projCols" value="10" min="4" max="20" style="width:70px"></div>',
      ()=>{
        const name=document.getElementById('projName').value;
        const rows=parseInt(document.getElementById('projRows').value)||10;
        const cols=parseInt(document.getElementById('projCols').value)||10;
        if(!name||!name.trim())return App.toast.warning('Name required');
        App.data.pushUndo();
        const p={id:App.util.uid(),name:name.trim(),rows,cols,cells:[],assignedStudents:[],seating:{},lockedSeats:[],zones:[],rules:[],history:[],notes:'',lastGenerated:null,createdAt:Date.now(),updatedAt:Date.now()};
        p.cells=App.layout._makeEmptyGrid(rows,cols);
        App._state.projects.push(p);
        App._state.currentProjectId=p.id;
        App.data.autoSave();
        App.projects.renderList();
        App.nav.go('layout');
        App.toast.success(__('projectCreated'));
        App.modal.close();
      }
    );
    setTimeout(()=>{const inp=document.getElementById('projName');if(inp)inp.focus()},100);
  },
  rename(id){
    const p=getProjectById(id);
    if(!p)return;
    App.modal.open(__('rename'),'<label for="renameInput">'+__('projectName')+'</label><input type="text" id="renameInput" value="'+p.name+'" autofocus>',()=>{
      const v=document.getElementById('renameInput').value;if(!v||!v.trim())return;
      App.data.pushUndo();p.name=v.trim();p.updatedAt=Date.now();App.data.autoSave();App.projects.renderList();App.modal.close();
    });
  },
  duplicate(id){
    const p=getProjectById(id);
    if(!p)return;
    App.data.pushUndo();
    const np=App.util.clone(p);
    np.id=App.util.uid();np.name=p.name+' (Copy)';np.createdAt=Date.now();np.updatedAt=Date.now();
    np.history=[];
    App._state.projects.push(np);
    App.data.autoSave();App.projects.renderList();App.toast.success(__('projectDuplicated'));
  },
  remove(id){
    App.modal.confirm(__('confirm'),()=>{
      App.data.pushUndo();
      App._state.projects=App._state.projects.filter(p=>p.id!==id);
      if(App._state.currentProjectId===id)App._state.currentProjectId=App._state.projects.length?App._state.projects[0].id:null;
      App.data.autoSave();App.projects.renderList();App.dashboard.refresh();
    });
  },
  select(id){
    App._state.currentProjectId=id;
    App.data.autoSave();
    App.projects.renderList();
    App.projectBadges.update();
    if(App._state.currentView==='layout')App.layout.render();
    else if(App._state.currentView==='generator')App.generator.refresh();
  },
  renderList(){
    const container=document.getElementById('projectList');
    const q=(document.getElementById('projectSearch').value||'').toLowerCase();
    const filtered=App._state.projects.filter(p=>p.name.toLowerCase().includes(q));
    if(!filtered.length){
      container.innerHTML='<div class="empty-state glass"><p>'+__('noProjects')+'</p><button class="btn btn-primary" onclick="App.projects.showCreateModal()">'+__('createProject')+'</button></div>';
      return;
    }
    container.innerHTML=filtered.map(p=>{
      const cells=p.cells||[];let desks=0;
      for(let r=0;r<cells.length;r++)for(let c=0;c<(cells[r]||[]).length;c++)if(cells[r][c]===1)desks++;
      const isActive=p.id===App._state.currentProjectId;
      const assigned=p.assignedStudents?p.assignedStudents.length:0;
      return '<div class="project-card'+(isActive?' active':'')+'" onclick="App.projects.select(\''+p.id+'\')">'+
        '<h3>'+p.name+'</h3>'+
        '<div class="project-meta">'+
        '<span>🪑 '+desks+' desks</span>'+
        '<span>👤 '+assigned+' students</span>'+
        '<span>🕐 '+App.util.formatDateShort(p.updatedAt||p.createdAt)+'</span>'+
        '</div>'+
        '<div class="project-actions">'+
        '<button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();App.projects.rename(\''+p.id+'\')">✏️</button>'+
        '<button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();App.projects.duplicate(\''+p.id+'\')">📋</button>'+
        '<button class="btn btn-sm btn-danger" onclick="event.stopPropagation();App.projects.remove(\''+p.id+'\')">🗑️</button>'+
        '</div></div>'
    }).join('');
  }
};

App.projectBadges = {
  update(){
    const p=getProject();
    const text=p?p.name:__('noProject');
    document.getElementById('layoutProjectBadge').textContent=text;
    document.getElementById('genProjectBadge').textContent=text;
  }
};

/* ===== STUDENT DATABASE ===== */
App.students = {
  add(name, studentNumber='', gender='unspecified', memo=''){
    if(!name||!name.trim())return;
    App.data.pushUndo();
    App._state.students.push({id:App.util.uid(),name:name.trim(),studentNumber,gender,memo,favorite:false,createdAt:Date.now()});
    App.data.autoSave();App.students.renderList();App.dashboard.refresh();
  },
  edit(id){
    const s=getStudent(id);if(!s)return;
    App.modal.open(__('editStudent'),
      '<label>'+__('name')+'</label><input type="text" id="editSName" value="'+s.name+'" autofocus>'+
      '<label>'+__('text')+' Number</label><input type="text" id="editSNum" value="'+(s.studentNumber||'')+'">'+
      '<label>Gender</label><select id="editSGender"><option value="male"'+(s.gender==='male'?' selected':'')+'>Male</option><option value="female"'+(s.gender==='female'?' selected':'')+'>Female</option><option value="unspecified"'+(s.gender==='unspecified'?' selected':'')+'>Unspecified</option></select>'+
      '<label>Memo</label><textarea id="editSMemo">'+(s.memo||'')+'</textarea>',
      ()=>{
        const name=document.getElementById('editSName').value;if(!name||!name.trim())return;
        App.data.pushUndo();s.name=name.trim();s.studentNumber=document.getElementById('editSNum').value;
        s.gender=document.getElementById('editSGender').value;s.memo=document.getElementById('editSMemo').value;
        App.data.autoSave();App.students.renderList();App.modal.close();
      }
    );
  },
  remove(id){
    App.modal.confirm(__('confirm'),()=>{
      App.data.pushUndo();
      App._state.students=App._state.students.filter(s=>s.id!==id);
      App.data.autoSave();App.students.renderList();App.dashboard.refresh();
    });
  },
  toggleFavorite(id){
    const s=getStudent(id);if(!s)return;
    s.favorite=!s.favorite;App.data.autoSave();App.students.renderList();
  },
  showAddModal(){
    App.modal.open(__('addStudent'),
      '<label>'+__('name')+' *</label><input type="text" id="addSName" placeholder="Kim Minsoo" autofocus>'+
      '<label>'+__('text')+' Number</label><input type="text" id="addSNum" placeholder="2024001">'+
      '<label>Gender</label><select id="addSGender"><option value="unspecified">Unspecified</option><option value="male">Male</option><option value="female">Female</option></select>'+
      '<label>Memo</label><textarea id="addSMemo" placeholder="Optional notes..."></textarea>',
      ()=>{
        const name=document.getElementById('addSName').value;if(!name||!name.trim())return App.toast.warning('Name required');
        App.students.add(name,document.getElementById('addSNum').value,document.getElementById('addSGender').value,document.getElementById('addSMemo').value);
        App.modal.close();
      }
    );
    setTimeout(()=>{const i=document.getElementById('addSName');if(i)i.focus()},100);
  },
  showBulkImportModal(){
    App.modal.open(__('bulkImport'),
      '<p style="margin-bottom:8px;font-size:13px;color:var(--text-secondary)">'+__('bulkImportHint')+':</p><textarea id="bulkText" rows="12" placeholder="Kim Minsoo\nLee Jisoo\nPark Minji\n..." style="width:100%"></textarea>',
      ()=>{
        const text=document.getElementById('bulkText').value;if(!text||!text.trim())return;
        const lines=text.split('\n').filter(l=>l.trim());
        App.data.pushUndo();
        lines.forEach(line=>{
          const name=line.trim();if(!name)return;
          if(!getStudentByName(name))App._state.students.push({id:App.util.uid(),name,studentNumber:'',gender:'unspecified',memo:'',favorite:false,createdAt:Date.now()});
        });
        App.data.autoSave();App.students.renderList();App.dashboard.refresh();App.toast.success(lines.length+' students imported');App.modal.close();
      }
    );
  },
  exportJSON(){
    const json=JSON.stringify(App._state.students,null,2);
    App.util.saveToFile(json,'students-backup-'+Date.now()+'.json');
  },
  async importJSON(){
    try {
      const text=await App.util.readFile();
      const data=JSON.parse(text);
      if(!Array.isArray(data))throw new Error('Invalid format');
      App.data.pushUndo();
      App._state.students=data;
      App.data.autoSave();App.students.renderList();App.dashboard.refresh();App.toast.success(__('importSuccess'));
    }catch(e){App.toast.error(__('error')+': '+e.message)}
  },
  renderList(){
    const container=document.getElementById('studentList');
    const q=(document.getElementById('studentSearch').value||'').toLowerCase();
    let list=App._state.students.filter(s=>s.name.toLowerCase().includes(q)||(s.studentNumber||'').toLowerCase().includes(q));
    container.innerHTML=list.length?list.map(s=>{
      const gClass=s.gender==='male'?'male':s.gender==='female'?'female':'unspecified';
      const gLabel=s.gender==='male'?'♂ Male':s.gender==='female'?'♀ Female':'—';
      return '<div class="student-row">'+
        '<span class="favorite-star'+(s.favorite?' active':'')+'" onclick="App.students.toggleFavorite(\''+s.id+'\')">'+(s.favorite?'★':'☆')+'</span>'+
        '<span class="student-name">'+s.name+'</span>'+
        '<span class="student-number">'+(s.studentNumber||'')+'</span>'+
        '<span class="student-gender '+gClass+'">'+gLabel+'</span>'+
        '<div class="student-actions">'+
        '<button class="btn btn-sm btn-secondary" onclick="App.students.edit(\''+s.id+'\')">✏️</button>'+
        '<button class="btn btn-sm btn-danger" onclick="App.students.remove(\''+s.id+'\')">🗑️</button>'+
        '</div></div>'
    }).join(''):'<div class="empty-state glass"><p>'+__('noStudents')+'</p></div>';
    document.getElementById('dbStudentCount').textContent=App._state.students.length+' students';
  }
};

/* ===== PROJECT STUDENT MANAGEMENT ===== */
App.projectStudents = {
  renderList(projectId){
    const p=getProjectById(projectId);
    if(!p)return;
    const container=document.getElementById('genStudentList');
    const q=(document.getElementById('genStudentSearch').value||'').toLowerCase();
    const allStudents=p.assignedStudents||[];
    const list=allStudents.map(id=>getStudent(id)).filter(s=>s&&s.name.toLowerCase().includes(q));
    container.innerHTML=list.length?list.map(s=>'<div class="gen-student-item">'+s.name+'</div>').join(''):'<div style="padding:8px;font-size:12px;color:var(--text-muted)">'+__('noStudents')+'</div>';
    document.getElementById('genStudentCount').textContent=allStudents.length;
  },
  showAddDialog(){
    const p=getProject();
    if(!p)return;
    const available=App._state.students.filter(s=>!(p.assignedStudents||[]).includes(s.id));
    App.modal.open(__('addFromDb'),
      '<input type="text" id="addStudentSearch" placeholder="'+__('searchStudents')+'" oninput="App.projectStudents._filterAddList()" style="margin-bottom:12px">'+
      '<div id="addStudentList" style="max-height:300px;overflow-y:auto">'+
      available.map(s=>'<label style="display:flex;align-items:center;gap:8px;padding:4px 0;cursor:pointer"><input type="checkbox" value="'+s.id+'">'+s.name+'</label>').join('')+
      '</div>',
      ()=>{
        const checks=document.querySelectorAll('#addStudentList input:checked');
        if(!checks.length)return;
        App.data.pushUndo();
        checks.forEach(c=>{const id=c.value;if(!(p.assignedStudents||[]).includes(id))p.assignedStudents.push(id)});
        p.updatedAt=Date.now();App.data.autoSave();App.generator.updateStudentList();App.modal.close();
      }
    );
  },
  _filterAddList(){
    const q=(document.getElementById('addStudentSearch').value||'').toLowerCase();
    const p=getProject();if(!p)return;
    const available=App._state.students.filter(s=>!(p.assignedStudents||[]).includes(s.id)&&s.name.toLowerCase().includes(q));
    const list=document.getElementById('addStudentList');
    if(list)list.innerHTML=available.map(s=>'<label style="display:flex;align-items:center;gap:8px;padding:4px 0;cursor:pointer"><input type="checkbox" value="'+s.id+'">'+s.name+'</label>').join('')||'<p style="color:var(--text-muted);font-size:13px">No students found</p>';
  },
  removeAll(){
    const p=getProject();if(!p)return;
    App.modal.confirm(__('confirm'),()=>{
      App.data.pushUndo();p.assignedStudents=[];p.updatedAt=Date.now();App.data.autoSave();
      App.generator.updateStudentList();
    });
  }
};

/* ===== LAYOUT EDITOR ===== */
App.layout = {
  _cellTypes: [0,1],
  _cellLabels: ['','','','',''],
  _isZoneEditing: false,

  _makeEmptyGrid(rows,cols){
    return Array.from({length:rows},()=>Array(cols).fill(0));
  },

  resizeGrid(){
    const p=getProject();if(!p)return;
    let rows=parseInt(document.getElementById('layoutRows').value)||10;
    let cols=parseInt(document.getElementById('layoutCols').value)||10;
    rows=Math.max(4,Math.min(20,rows));cols=Math.max(4,Math.min(20,cols));
    document.getElementById('layoutRows').value=rows;document.getElementById('layoutCols').value=cols;
    App.data.pushUndo();
    const newCells=App.layout._makeEmptyGrid(rows,cols);
    for(let r=0;r<Math.min(rows,p.cells.length);r++)
      for(let c=0;c<Math.min(cols,(p.cells[r]||[]).length);c++)
        newCells[r][c]=p.cells[r][c];
    p.cells=newCells;p.rows=rows;p.cols=cols;p.updatedAt=Date.now();
    App.data.autoSave();App.layout.render();
  },

  save(){
    const p=getProject();if(!p)return;
    p.updatedAt=Date.now();App.data.save();
    App.toast.success(__('layoutSaved'));
  },

  clear(){
    const p=getProject();if(!p)return;
    App.modal.confirm(__('confirm'),()=>{
      App.data.pushUndo();
      p.cells=App.layout._makeEmptyGrid(p.rows||10,p.cols||10);
      p.seating={};p.updatedAt=Date.now();App.data.autoSave();App.layout.render();
    });
  },

  getCellColor(type){
    return type===1?'cell-desk':'cell-empty';
  },

  render(){
    const p=getProject();
    App.projectBadges.update();
    const container=document.getElementById('layoutGrid');
    if(!p){
      container.innerHTML='<div class="empty-state"><p>'+__('noProject')+'</p></div>';
      return;
    }
    const rows=p.rows||10;const cols=p.cols||10;
    document.getElementById('layoutRows').value=rows;document.getElementById('layoutCols').value=cols;
    const cells=p.cells||App.layout._makeEmptyGrid(rows,cols);
    const showZones=document.getElementById('showZoneOverlay').checked;
    const zones=p.zones||[];
    const zoneCellMap={};
    if(showZones)zones.forEach(z=>{(z.cells||[]).forEach(k=>{zoneCellMap[k]=z})});
    const zoneColors={male:'rgba(67,97,238,0.25)',female:'rgba(247,37,133,0.25)',mixed:'rgba(46,196,182,0.25)',none:'transparent'};
    const seating=p.seating||{};
    const locked=p.lockedSeats||[];
    const editingZoneId=App._state.editingZoneId;

    container.style.gridTemplateColumns='repeat('+cols+',1fr)';
    container.innerHTML='';
    let num=1;
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        const cell=document.createElement('div');
        const val=cells[r]&&cells[r][c]!==undefined?cells[r][c]:0;
        cell.className='grid-cell '+App.layout.getCellColor(val);
        cell.dataset.r=r;cell.dataset.c=c;
        const key=r+','+c;
        const isLocked=locked.includes(key);
        const studentId=seating[key];
        const student=studentId?getStudent(studentId):null;
        const zone=zoneCellMap[key];
        if(showZones&&zone)cell.style.background=zoneColors[zone.rule]||'transparent';
        if(val===1){
          if(App._state.settings.seatNumbers)cell.innerHTML='<span class="seat-label">'+num+'</span>';
          num++;
          if(isLocked)cell.innerHTML+='<span class="seat-lock">🔒</span>';
          if(student)cell.innerHTML+='<span class="seat-student-name">'+student.name+'</span>';
        }
        if(zone&&showZones)cell.classList.add('zone-highlight');
        if(editingZoneId&&zones.find(z=>z.id===editingZoneId)){
          const ez=zones.find(z=>z.id===editingZoneId);
          if(ez&&(ez.cells||[]).includes(key))cell.style.outline='3px solid var(--accent)';
          cell.onclick=()=>App.layout._toggleZoneCell(key);
        }else if(!(editingZoneId)){
          cell.onclick=()=>App.layout._cycleCell(r,c);
          cell.oncontextmenu=(e)=>{e.preventDefault();
            const v=cells[r]&&cells[r][c];
            if(v!==1)return;
            App.data.pushUndo();
            if(isLocked){
              p.lockedSeats=(p.lockedSeats||[]).filter(k=>k!==key);
            }else{
              if(!p.lockedSeats)p.lockedSeats=[];
              p.lockedSeats.push(key);
            }
            App.data.autoSave();App.layout.render();
          };
        }
        container.appendChild(cell);
      }
    }
    App.layout._renderZoneList();
  },

  _cycleCell(r,c){
    const p=getProject();if(!p)return;
    const val=(p.cells[r]||[])[c]||0;
    App.data.pushUndo();
    const newVal=val===0?1:0;
    p.cells[r][c]=newVal;
    if(newVal!==1){delete(p.seating[r+','+c])}
    p.updatedAt=Date.now();App.data.autoSave();App.layout.render();
  },

  _toggleZoneCell(key){
    const p=getProject();if(!p)return;
    const zone=p.zones.find(z=>z.id===App._state.editingZoneId);
    if(!zone)return;
    App.data.pushUndo();
    const idx=(zone.cells||[]).indexOf(key);
    if(idx>=0)zone.cells.splice(idx,1);
    else{if(!zone.cells)zone.cells=[];zone.cells.push(key)}
    App.data.autoSave();App.layout.render();
  },

  _renderZoneList(){
    const p=getProject();if(!p)return;
    const container=document.getElementById('zoneList');
    const zones=p.zones||[];
    const rules={male:__('maleOnly'),female:__('femaleOnly'),mixed:__('mixed'),none:__('noRestriction')};
    container.innerHTML=zones.map(z=>'<div class="zone-item'+(z.id===App._state.editingZoneId?' active':'')+'" onclick="App.layout.selectZone(\''+z.id+'\')"><div class="zone-name"><span>'+z.name+'</span><span style="font-size:11px;color:var(--text-muted);cursor:pointer" onclick="event.stopPropagation();App.layout.deleteZone(\''+z.id+'\')">✕</span></div><div class="zone-rule">'+(rules[z.rule]||__('noRestriction'))+' — '+(z.cells||[]).length+' cells</div></div>').join('');
    if(!zones.length)container.innerHTML='<p style="font-size:12px;color:var(--text-muted)">No zones yet.</p>';
  },

  toggleZoneEditor(){
    App._isZoneEditing=!App._isZoneEditing;
    document.getElementById('zoneEditorPanel').classList.toggle('hidden');
    if(!App._isZoneEditing){App._state.editingZoneId=null;App.layout.render()}
  },

  addZone(){
    const p=getProject();if(!p)return;
    App.modal.open(__('addZone'),
      '<label>'+__('zoneName')+'</label><input type="text" id="zoneNameInput" value="Zone '+(p.zones.length+1)+'" autofocus>'+
      '<label>Rule</label><select id="zoneRuleInput"><option value="none">'+__('noRestriction')+'</option><option value="male">'+__('maleOnly')+'</option><option value="female">'+__('femaleOnly')+'</option><option value="mixed">'+__('mixed')+'</option></select>',
      ()=>{
        const name=document.getElementById('zoneNameInput').value;if(!name||!name.trim())return;
        App.data.pushUndo();
        const zone={id:App.util.uid(),name:name.trim(),cells:[],rule:document.getElementById('zoneRuleInput').value};
        p.zones.push(zone);
        App._state.editingZoneId=zone.id;
        App.data.autoSave();App.layout.render();App.modal.close();
      }
    );
  },

  selectZone(id){
    App._state.editingZoneId=id;
    App.layout.render();
    const p=getProject();if(!p)return;
    const zone=p.zones.find(z=>z.id===id);if(!zone)return;
    App.modal.open(__('edit'),
      '<label>'+__('zoneName')+'</label><input type="text" id="zoneNameEdit" value="'+zone.name+'" autofocus>'+
      '<label>Rule</label><select id="zoneRuleEdit"><option value="none"'+(zone.rule==='none'?' selected':'')+'>'+__('noRestriction')+'</option><option value="male"'+(zone.rule==='male'?' selected':'')+'>'+__('maleOnly')+'</option><option value="female"'+(zone.rule==='female'?' selected':'')+'>'+__('femaleOnly')+'</option><option value="mixed"'+(zone.rule==='mixed'?' selected':'')+'>'+__('mixed')+'</option></select>'+
      '<p style="font-size:12px;color:var(--text-muted)">Click desks in the grid to toggle zone membership.</p>',
      ()=>{
        const name=document.getElementById('zoneNameEdit').value;
        if(!name||!name.trim())return;
        zone.name=name.trim();zone.rule=document.getElementById('zoneRuleEdit').value;
        App.data.autoSave();App.layout.render();App.modal.close();
      }
    );
  },

  deleteZone(id){
    const p=getProject();if(!p)return;
    App.data.pushUndo();
    p.zones=p.zones.filter(z=>z.id!==id);
    if(App._state.editingZoneId===id)App._state.editingZoneId=null;
    App.data.autoSave();App.layout.render();
  },

  applyTemplate(){
    const p=getProject();if(!p)return;
    const t=document.getElementById('templateSelect').value;
    if(!t)return;
    App.data.pushUndo();
    const rows=p.rows||10;const cols=p.cols||10;
    const grid=App.layout._makeEmptyGrid(rows,cols);
    const midRow=Math.floor(rows/2);const midCol=Math.floor(cols/2);
    switch(t){
      case 'rows':
        for(let r=1;r<rows;r++)for(let c=0;c<cols;c++)grid[r][c]=1;
        for(let r=0;r<rows;r++){grid[r][0]=0;grid[r][cols-1]=0}
        grid[0][0]=0;grid[0][cols-1]=0;break;
      case 'exam':
        for(let r=1;r<rows;r++)for(let c=0;c<cols;c++)grid[r][c]=1;
        grid[0][0]=1;
        for(let r=0;r<rows;r++)grid[r][0]=0;
        grid[rows-1][0]=1;grid[1][1]=1;break;
      case 'ushape':
        for(let r=0;r<rows;r++)for(let c=1;c<cols-1;c++)grid[r][c]=1;
        for(let r=0;r<2;r++)for(let c=0;c<cols;c++)grid[r][c]=0;
        for(let r=2;r<rows;r++){grid[r][0]=1;grid[r][cols-1]=1}
        break;
      case 'groups':
        for(let r=1;r<rows-1;r++)for(let c=1;c<cols-1;c++){
          if((r<rows/2&&c<cols/2)||(r>=rows/2&&c>=cols/2))grid[r][c]=0;
          else grid[r][c]=1;
        }
        break;
      case 'computer':
        for(let r=0;r<rows;r++)for(let c=0;c<cols;c++)grid[r][c]=c%2===0&&r%2===0?1:0;
        break;
      case 'lecture':
        for(let r=2;r<rows;r++)for(let c=0;c<cols;c++)grid[r][c]=c<cols-0?1:0;
        break;
      case 'elementary':
        for(let r=1;r<rows-1;r++)for(let c=1;c<cols-1;c++)grid[r][c]=1;
        break;
    }
    p.cells=grid;p.updatedAt=Date.now();App.data.autoSave();App.layout.render();
    document.getElementById('templateSelect').value='';
  }
};

/* ===== SEATING GENERATOR ===== */
App.generator = {
  refresh(){
    const p=getProject();
    App.projectBadges.update();
    App.generator.updateStudentList();
    App.generator.renderSeating();
    App.generator.renderRules();
  },

  updateStudentList(){
    App.projectStudents.renderList(App._state.currentProjectId);
    App.generator.renderSeating();
  },

  renderRules(){
    const p=getProject();if(!p)return;
    const container=document.getElementById('rulesList');
    const rules=p.rules||[];
    const typeLabels={
      together:__('keepTogether'),separate:__('separate'),avoid_front:__('avoidFront'),prefer_front:__('preferFront'),
      avoid_back:__('avoidBack'),prefer_back:__('preferBack'),avoid_left:__('avoidLeft'),prefer_left:__('preferLeft'),
      avoid_right:__('avoidRight'),prefer_right:__('preferRight')
    };
    container.innerHTML=rules.map(r=>{
      let names='';
      if(r.type==='together'||r.type==='separate'){
        names=(r.studentIds||[]).map(id=>{const s=getStudent(id);return s?s.name:'?'}).join(' + ');
      } else {
        names=(r.studentIds||[]).map(id=>{const s=getStudent(id);return s?s.name:'?'}).join(', ');
      }
      return '<div class="rule-item"><span><span class="rule-text">'+(typeLabels[r.type]||r.type)+'</span> '+names+'</span><span class="rule-del" onclick="App.generator.deleteRule(\''+r.id+'\')">✕</span></div>'
    }).join('');
    if(!rules.length)container.innerHTML='<p style="font-size:12px;color:var(--text-muted);padding:4px 0">No rules defined.</p>';
  },

  showAddRuleModal(){
    const p=getProject();if(!p)return;
    const assigned=p.assignedStudents||[];
    const students=assigned.map(id=>getStudent(id)).filter(s=>s);
    const studentOptions=students.map(s=>'<option value="'+s.id+'">'+s.name+'</option>').join('');
    App.modal.open(__('addRule'),
      '<label>Rule Type</label><select id="ruleTypeSelect" onchange="App.generator._ruleTypeChanged()">'+
      '<option value="together">'+__('keepTogether')+'</option>'+
      '<option value="separate">'+__('separate')+'</option>'+
      '<option value="avoid_front">'+__('avoidFront')+'</option>'+
      '<option value="prefer_front">'+__('preferFront')+'</option>'+
      '<option value="avoid_back">'+__('avoidBack')+'</option>'+
      '<option value="prefer_back">'+__('preferBack')+'</option>'+
      '<option value="avoid_left">'+__('avoidLeft')+'</option>'+
      '<option value="prefer_left">'+__('preferLeft')+'</option>'+
      '<option value="avoid_right">'+__('avoidRight')+'</option>'+
      '<option value="prefer_right">'+__('preferRight')+'</option></select>'+
      '<div id="ruleStudentsContainer"><label>Students</label><select id="ruleStudent1" style="margin-bottom:8px">'+studentOptions+'</select><select id="ruleStudent2">'+studentOptions+'</select></div>'+
      '<p style="font-size:12px;color:var(--text-muted)">Pick students this rule applies to.</p>',
      ()=>{
        const type=document.getElementById('ruleTypeSelect').value;
        const isPair=type==='together'||type==='separate';
        let ids=[];
        if(isPair){
          const s1=document.getElementById('ruleStudent1').value;
          const s2=document.getElementById('ruleStudent2').value;
          if(s1&&s2)ids=[s1,s2];
        } else {
          const s1=document.getElementById('ruleStudent1').value;
          if(s1)ids=[s1];
        }
        if(!ids.length)return;
        App.data.pushUndo();
        if(!p.rules)p.rules=[];
        p.rules.push({id:App.util.uid(),type,studentIds:ids,enabled:true});
        App.data.autoSave();App.generator.renderRules();App.modal.close();
      }
    );
  },

  _ruleTypeChanged(){
    const type=document.getElementById('ruleTypeSelect').value;
    const isPair=type==='together'||type==='separate';
    const container=document.getElementById('ruleStudentsContainer');
    const p=getProject();if(!p)return;
    const assigned=p.assignedStudents||[];
    const students=assigned.map(id=>getStudent(id)).filter(s=>s);
    const opts=students.map(s=>'<option value="'+s.id+'">'+s.name+'</option>').join('');
    if(isPair){
      container.innerHTML='<label>Student 1</label><select id="ruleStudent1" style="margin-bottom:8px">'+opts+'</select><label>Student 2</label><select id="ruleStudent2">'+opts+'</select>';
    } else {
      container.innerHTML='<label>Student</label><select id="ruleStudent1">'+opts+'</select>';
    }
  },

  deleteRule(id){
    const p=getProject();if(!p)return;
    App.data.pushUndo();
    p.rules=(p.rules||[]).filter(r=>r.id!==id);
    App.data.autoSave();App.generator.renderRules();
  },

  clearSeating(){
    const p=getProject();if(!p)return;
    App.modal.confirm(__('confirm'),()=>{
      App.data.pushUndo();
      p.seating={};
      App.data.autoSave();App.generator.renderSeating();
    });
  },

  renderSeating(){
    const p=getProject();if(!p)return;
    const container=document.getElementById('genSeatingGrid');
    const rows=p.rows||10;const cols=p.cols||10;
    const cells=p.cells||[];
    const seating=p.seating||{};
    const locked=p.lockedSeats||[];
    const zones=p.zones||[];
    const showZones=document.getElementById('showZoneOverlay')?document.getElementById('showZoneOverlay').checked:false;
    const zoneCellMap={};
    if(showZones)zones.forEach(z=>{(z.cells||[]).forEach(k=>{zoneCellMap[k]=z})});
    const zoneColors={male:'rgba(67,97,238,0.2)',female:'rgba(247,37,133,0.2)',mixed:'rgba(46,196,182,0.2)',none:'transparent'};

    container.style.gridTemplateColumns='repeat('+cols+',1fr)';
    container.innerHTML='';
    let num=1;let desks=0;let occupied=0;
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        const cell=document.createElement('div');
        const val=cells[r]&&cells[r][c]!==undefined?cells[r][c]:0;
        cell.className='grid-cell '+App.layout.getCellColor(val);
        cell.dataset.r=r;cell.dataset.c=c;
        const key=r+','+c;
        const isLocked=locked.includes(key);
        const studentId=seating[key];
        const student=studentId?getStudent(studentId):null;
        const zone=zoneCellMap[key];
        if(showZones&&zone)cell.style.background=zoneColors[zone.rule]||'transparent';
        if(val===1){
          desks++;
          if(App._state.settings.seatNumbers)cell.innerHTML='<span class="seat-label">'+num+'</span>';
          num++;
          if(isLocked)cell.innerHTML+='<span class="seat-lock">🔒</span>';
          if(student){
            occupied++;
            cell.innerHTML+='<span class="seat-student-name">'+student.name+'</span>';
            cell.draggable=true;
            cell.dataset.studentId=student.id;
          }
          cell.addEventListener('dragstart',App.generator._onDragStart);
          cell.addEventListener('dragover',App.generator._onDragOver);
          cell.addEventListener('dragenter',App.generator._onDragEnter);
          cell.addEventListener('dragleave',App.generator._onDragLeave);
          cell.addEventListener('drop',App.generator._onDrop);
          cell.addEventListener('dragend',App.generator._onDragEnd);
          cell.oncontextmenu=(e)=>{e.preventDefault();
            if(val!==1)return;
            App.data.pushUndo();
            if(isLocked){
              p.lockedSeats=(p.lockedSeats||[]).filter(k=>k!==key);
              App.toast.success('Seat unlocked');
            } else {
              if(!p.lockedSeats)p.lockedSeats=[];
              p.lockedSeats.push(key);
              App.toast.success('Seat locked');
            }
            App.data.autoSave();App.generator.renderSeating();
          };
          cell.ondblclick=()=>{
            if(isLocked||val!==1)return;
            if(seating[key]){App.data.pushUndo();delete seating[key];App.data.autoSave();App.generator.renderSeating();return}
            App.generator._assignSingleSeat(key);
          };
        } else {
          cell.draggable=false;
        }
        container.appendChild(cell);
      }
    }
    document.getElementById('genDeskCount').textContent=desks;
    document.getElementById('genAssignedCount').textContent=occupied;
    document.getElementById('genEmptyCount').textContent=desks-occupied;
    document.getElementById('genOccRate').textContent=desks>0?Math.round(occupied/desks*100)+'%':'0%';
  },

  _dragSrcKey:null,

  _onDragStart(e){
    const r=e.target.dataset.r;const c=e.target.dataset.c;
    if(!r||!c)return;const p=getProject();if(!p)return;
    const key=r+','+c;
    if((p.lockedSeats||[]).includes(key)){e.preventDefault();return}
    if(!p.seating[key]){e.preventDefault();return}
    App.generator._dragSrcKey=key;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData('text/plain',key);
  },

  _onDragOver(e){e.preventDefault();e.dataTransfer.dropEffect='move'},
  _onDragEnter(e){e.preventDefault();e.target.classList.add('drag-over')},
  _onDragLeave(e){e.target.classList.remove('drag-over')},

  _onDrop(e){
    e.preventDefault();e.target.classList.remove('drag-over');
    const srcKey=App.generator._dragSrcKey;if(!srcKey)return;
    const r=e.target.dataset.r;const c=e.target.dataset.c;
    if(r===undefined||c===undefined)return;
    const tgtKey=r+','+c;
    if(srcKey===tgtKey)return;
    const p=getProject();if(!p)return;
    const val=p.cells[r]&&p.cells[r][c];
    if(val!==1)return;
    if((p.lockedSeats||[]).includes(tgtKey))return;
    App.data.pushUndo();
    const srcStudent=p.seating[srcKey];
    const tgtStudent=p.seating[tgtKey];
    if(tgtStudent){
      p.seating[srcKey]=tgtStudent;
    } else {
      delete p.seating[srcKey];
    }
    p.seating[tgtKey]=srcStudent;
    p.updatedAt=Date.now();App.data.autoSave();App.generator.renderSeating();
  },

  _onDragEnd(e){e.target.classList.remove('dragging');document.querySelectorAll('.drag-over').forEach(el=>el.classList.remove('drag-over'));App.generator._dragSrcKey=null},

  _assignSingleSeat(key){
    const p=getProject();if(!p)return;
    const unassigned=(p.assignedStudents||[]).filter(id=>!Object.values(p.seating).includes(id));
    if(!unassigned.length)return;
    const studentId=unassigned[Math.floor(Math.random()*unassigned.length)];
    App.data.pushUndo();p.seating[key]=studentId;p.updatedAt=Date.now();App.data.autoSave();App.generator.renderSeating();
  },

  generate(){
    const p=getProject();if(!p)return App.toast.warning(__('noProject'));
    const students=p.assignedStudents||[];
    if(!students.length)return App.toast.warning(__('assignStudents'));
    const cells=p.cells||[];let deskKeys=[];
    for(let r=0;r<cells.length;r++)for(let c=0;c<(cells[r]||[]).length;c++)if(cells[r][c]===1)deskKeys.push(r+','+c);
    if(!deskKeys.length)return App.toast.warning('No student desks found. Add desks in Layout Editor.');
    if(!deskKeys.length)return App.toast.warning(__('noDesks'));
    App.data.pushUndo();
    const zones=p.zones||[];
    const rules=p.rules||[];
    const locked=p.lockedSeats||[];
    const seating=p.seating||{};

    const newSeating={};
    locked.forEach(key=>{if(seating[key])newSeating[key]=seating[key]});

    const assignedIds=Object.values(newSeating);
    let unassigned=students.filter(id=>!assignedIds.includes(id));
    App.util.shuffleArray(unassigned);

    const zoneMap={};zones.forEach(z=>{(z.cells||[]).forEach(k=>{zoneMap[k]=z.rule})});
    const genderMap={};students.forEach(id=>{const s=getStudent(id);if(s)genderMap[id]=s.gender||'unspecified'});

    const eligible={};
    deskKeys.filter(k=>!locked.includes(k)).forEach(k=>{
      const zr=zoneMap[k];
      if(!zr||zr==='none'||zr==='mixed')eligible[k]=true;
      else {
        const hasGender=unassigned.some(id=>{
          if(zr==='male'&&genderMap[id]==='male')return true;
          if(zr==='female'&&genderMap[id]==='female')return true;
          return false;
        });
        if(hasGender)eligible[k]=true;
      }
    });

    const prefRules={avoid_front:[],prefer_front:[],avoid_back:[],prefer_back:[],avoid_left:[],prefer_left:[],avoid_right:[],prefer_right:[]};
    const pairRules={together:[],separate:[]};
    rules.forEach(r=>{
      if(prefRules[r.type])prefRules[r.type].push(...(r.studentIds||[]));
      else if(pairRules[r.type])pairRules[r.type].push(r.studentIds||[]);
    });

    let eligibleKeys=Object.keys(eligible);
    if(eligibleKeys.length<unassigned.length){
      eligibleKeys=deskKeys.filter(k=>!locked.includes(k));
    }
    App.util.shuffleArray(eligibleKeys);

    const zonePrio={male:[],female:[]};
    eligibleKeys.forEach(k=>{
      const zr=zoneMap[k];
      if(zr==='male')zonePrio.male.push(k);
      else if(zr==='female')zonePrio.female.push(k);
    });

    let assignedInGen=[];
    const assignStudent=(studentId,key)=>{
      newSeating[key]=studentId;
      assignedInGen.push(studentId);
    };

    const assignToZone=(ids,zoneKeys)=>{
      const shuffled=App.util.shuffleArray([...zoneKeys]);
      ids.forEach((id,i)=>{
        if(i<shuffled.length&&!newSeating[shuffled[i]])assignStudent(id,shuffled[i]);
      });
    };

    const maleStudents=unassigned.filter(id=>genderMap[id]==='male');
    const femaleStudents=unassigned.filter(id=>genderMap[id]==='female');
    const otherStudents=unassigned.filter(id=>genderMap[id]==='unspecified'||!genderMap[id]);

    assignToZone(maleStudents,zonePrio.male);
    assignToZone(femaleStudents,zonePrio.female);

    const remaining=unassigned.filter(id=>!assignedInGen.includes(id));
    const freeKeys=eligibleKeys.filter(k=>!newSeating[k]);

    for(const id of remaining){
      let bestKey=null;
      const gender=genderMap[id];

      if(prefRules.prefer_front.includes(id)){
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[0])<2);
      }
      if(!bestKey&&prefRules.avoid_back.includes(id)){
        const maxR=Math.max(...freeKeys.map(k=>parseInt(k.split(',')[0])));
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[0])<maxR-1);
      }
      if(!bestKey&&prefRules.prefer_back.includes(id)){
        const maxR=Math.max(...freeKeys.map(k=>parseInt(k.split(',')[0])));
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[0])>=maxR-1);
      }
      if(!bestKey&&prefRules.avoid_front.includes(id)){
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[0])>1);
      }
      if(!bestKey&&prefRules.prefer_left.includes(id)){
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[1])<3);
      }
      if(!bestKey&&prefRules.avoid_right.includes(id)){
        const maxC=Math.max(...freeKeys.map(k=>parseInt(k.split(',')[1])));
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[1])<maxC-2);
      }
      if(!bestKey&&prefRules.prefer_right.includes(id)){
        const maxC=Math.max(...freeKeys.map(k=>parseInt(k.split(',')[1])));
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[1])>=maxC-2);
      }
      if(!bestKey&&prefRules.avoid_left.includes(id)){
        bestKey=freeKeys.find(k=>parseInt(k.split(',')[1])>2);
      }

      if(!bestKey){
        const zoneOk=freeKeys.filter(k=>{
          const zr=zoneMap[k];
          if(!zr||zr==='none'||zr==='mixed')return true;
          if(zr==='male'&&genderMap[id]==='male')return true;
          if(zr==='female'&&genderMap[id]==='female')return true;
          return false;
        });
        bestKey=zoneOk.length?zoneOk[0]:freeKeys[0];
      }

      if(bestKey){
        assignStudent(id,bestKey);
        freeKeys.splice(freeKeys.indexOf(bestKey),1);
      }
    }

    pairRules.together.forEach(pair=>{
      const [a,b]=pair;if(!a||!b)return;
      const aKey=Object.keys(newSeating).find(k=>newSeating[k]===a);
      const bKey=Object.keys(newSeating).find(k=>newSeating[k]===b);
      if(aKey&&!bKey){
        const [ar,ac]=aKey.split(',').map(Number);
        const neighbors=[(ar-1)+','+ac,(ar+1)+','+ac,ar+','+(ac-1),ar+','+(ac+1),(ar-1)+','+(ac-1),(ar-1)+','+(ac+1),(ar+1)+','+(ac-1),(ar+1)+','+(ac+1)];
        const free=neighbors.find(n=>freeKeys.includes(n)&&(!zoneMap[n]||zoneMap[n]==='none'||zoneMap[n]==='mixed'||(zoneMap[n]==='male'&&genderMap[b]==='male')||(zoneMap[n]==='female'&&genderMap[b]==='female')));
        if(free){newSeating[free]=b;freeKeys.splice(freeKeys.indexOf(free),1)}
      } else if(bKey&&!aKey){
        const [br,bc]=bKey.split(',').map(Number);
        const neighbors=[(br-1)+','+bc,(br+1)+','+bc,br+','+(bc-1),br+','+(bc+1)];
        const free=neighbors.find(n=>freeKeys.includes(n)&&(!zoneMap[n]||zoneMap[n]==='none'||zoneMap[n]==='mixed'));
        if(free){newSeating[free]=a;freeKeys.splice(freeKeys.indexOf(free),1)}
      }
    });

    p.seating=newSeating;
    p.lastGenerated=Date.now();
    p.updatedAt=Date.now();

    const histEntry={id:App.util.uid(),timestamp:Date.now(),seating:App.util.clone(newSeating),label:'Generation '+(p.history.length+1)};
    if(!p.history)p.history=[];
    p.history.push(histEntry);

    App.data.autoSave();
    if(App._state.settings.animations){
      document.getElementById('genSeatingGrid').classList.add('shuffling');
      setTimeout(()=>document.getElementById('genSeatingGrid').classList.remove('shuffling'),500);
    }
    App.generator.renderSeating();
    App.toast.success(__('seatingGenerated'));
    App.confetti.fire();
  }
};

// Add shuffleArray to util
App.util.shuffleArray = function(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
};

/* ===== HISTORY ===== */
App.history = {
  renderList(){
    const p=getProject();
    const container=document.getElementById('historyList');
    if(!p){
      container.innerHTML='<div class="empty-state glass"><p>'+__('noProject')+'</p></div>';
      return;
    }
    const history=p.history||[];
    if(!history.length){
      container.innerHTML='<div class="empty-state glass"><p>'+__('noHistory')+'</p></div>';
      return;
    }
    container.innerHTML=history.map(h=>{
      const seating=h.seating||{};
      const names=Object.values(seating).map(id=>{const s=getStudent(id);return s?s.name:'?'}).filter(Boolean);
      return '<div class="history-item">'+
        '<div class="history-header"><span class="history-project">'+p.name+'</span><span class="history-date">'+App.util.formatDate(h.timestamp)+'</span></div>'+
        '<div class="history-preview">'+names.slice(0,20).map(n=>'<span>'+n+'</span>').join('')+(names.length>20?'<span>+'+ (names.length-20)+' more</span>':'')+'</div>'+
        '<div class="history-actions">'+
        '<button class="btn btn-sm btn-secondary" onclick="App.history.restore(\''+h.id+'\')">🔄 '+__('restore')+'</button>'+
        '<button class="btn btn-sm btn-danger" onclick="App.history.remove(\''+h.id+'\')">🗑️</button>'+
        '</div></div>'
    }).join('');
  },

  restore(id){
    const p=getProject();if(!p)return;
    const h=(p.history||[]).find(h=>h.id===id);
    if(!h)return;
    App.data.pushUndo();
    p.seating=App.util.clone(h.seating);
    p.lastGenerated=h.timestamp;
    p.updatedAt=Date.now();
    App.data.autoSave();
    App.nav.go('generator');
    App.toast.success('Restored from '+App.util.formatDate(h.timestamp));
  },

  remove(id){
    const p=getProject();if(!p)return;
    App.data.pushUndo();
    p.history=(p.history||[]).filter(h=>h.id!==id);
    App.data.autoSave();App.history.renderList();
  },

  clearAll(){
    const p=getProject();if(!p)return;
    App.modal.confirm(__('confirm'),()=>{
      App.data.pushUndo();
      p.history=[];
      App.data.autoSave();App.history.renderList();
    });
  }
};

/* ===== SETTINGS ===== */
App.settings = {
  refresh(){
    const s=App._state.settings;
    document.getElementById('settingAutoSave').checked=s.autoSave!==false;
    document.getElementById('settingAnimations').checked=s.animations!==false;
    document.getElementById('settingSeatNumbers').checked=s.seatNumbers===true;
    document.getElementById('settingConfetti').checked=s.confetti!==false;
    document.getElementById('settingLanguage').value=s.language||'en';
    document.querySelectorAll('.theme-btn').forEach(b=>b.classList.toggle('btn-primary',b.dataset.theme===s.theme));
    document.querySelectorAll('.theme-btn').forEach(b=>b.classList.toggle('btn-secondary',b.dataset.theme!==s.theme));
  },

  setTheme(theme){
    App._state.settings.theme=theme;
    document.documentElement.setAttribute('data-theme',theme);
    App.data.autoSave();
    App.settings.refresh();
  },

  toggle(key){
    const el=document.getElementById('settingAutoSave');
    if(key==='autoSave')App._state.settings.autoSave=document.getElementById('settingAutoSave').checked;
    else if(key==='animations')App._state.settings.animations=document.getElementById('settingAnimations').checked;
    else if(key==='seatNumbers')App._state.settings.seatNumbers=document.getElementById('settingSeatNumbers').checked;
    else if(key==='confetti')App._state.settings.confetti=document.getElementById('settingConfetti').checked;
    App.data.autoSave();
    if(key==='seatNumbers'&&App._state.currentView==='generator')App.generator.renderSeating();
  },

  setLanguage(lang){
    App._state.settings.language=lang;
    App.data.autoSave();
  },

  exportAllData(){
    const data={state:App._state,undo:App._undoStack,redo:App._redoStack};
    App.util.saveToFile(JSON.stringify(data,null,2),'seat-planner-backup-'+Date.now()+'.json');
  },

  async importAllData(){
    try {
      const text=await App.util.readFile();
      const data=JSON.parse(text);
      if(!data||!data.state)throw new Error('Invalid backup file');
      App._state=data.state;
      App._undoStack=data.undo||[];
      App._redoStack=data.redo||[];
      App.data.save();
      App._refreshAll();
      App.toast.success(__('importSuccess'));
    }catch(e){App.toast.error(__('error')+': '+e.message)}
  },

  resetAll(){
    App.modal.confirm(__('importWarning'),()=>{
      localStorage.removeItem('classroomSeatPlanner');
      localStorage.removeItem('classroomSeatPlannerUndo');
      localStorage.removeItem('classroomSeatPlannerRedo');
      location.reload();
    });
  }
};

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', e=>{
  if(e.ctrlKey&&e.key==='z'){e.preventDefault();App.data.undo()}
  if(e.ctrlKey&&e.key==='y'){e.preventDefault();App.data.redo()}
  if(e.ctrlKey&&e.key==='s'){e.preventDefault();App.layout.save()}
  if(e.ctrlKey&&e.key==='g'){e.preventDefault();App.generator.generate()}
  if(!e.ctrlKey&&!e.altKey&&!e.metaKey&&e.key>='1'&&e.key<='7'){
    const views=['dashboard','projects','layout','students','generator','history','settings'];
    const idx=parseInt(e.key)-1;
    if(idx<views.length)App.nav.go(views[idx]);
  }
});

/* ===== REFRESH ALL ===== */
App._refreshAll = function(){
  App.dashboard.refresh();
  App.projects.renderList();
  App.layout.render();
  App.students.renderList();
  App.generator.refresh();
  App.history.renderList();
  App.settings.refresh();
  App.projectBadges.update();
};

/* ===== INIT ===== */
(function init(){
  App.data.load();
  App._state.settings = App._state.settings || { theme:'light', autoSave:true, animations:true, seatNumbers:false, confetti:true, language:'en' };
  App._state.projects = App._state.projects || [];
  App._state.students = App._state.students || [];
  document.documentElement.setAttribute('data-theme', App._state.settings.theme || 'light');

  // Sidebar click delegation
  document.getElementById('main-nav').addEventListener('click', function(e){
    const item = e.target.closest('.nav-item');
    if(item && item.dataset.view) App.nav.go(item.dataset.view);
  });

  App.nav.go(App._state.currentView || 'dashboard');
  App.settings.refresh();
  setInterval(()=>{if(App._dirty)App.data.save()},2000);
  window.addEventListener('beforeunload',()=>{if(App._dirty)App.data.save()});
})();

/* ===== EXPORT FUNCTIONS ===== */
App.export = {
  // Export has been moved to dedicated export section; kept for context
};

App.exportPNG = function(){
  const grid=document.getElementById('genSeatingGrid');
  if(!grid)return;
  App.toast.success('Opening print dialog for PNG...');
  window.print();
};

App.exportJSON = function(){
  const p=getProject();if(!p)return App.toast.warning(__('noProject'));
  App.util.saveToFile(JSON.stringify({project:p,exportedAt:Date.now()},null,2),p.name+'-export.json');
  App.toast.success('Exported');
};

App.importJSON = async function(){
  try {
    const text=await App.util.readFile();
    const data=JSON.parse(text);
    if(!data.project)throw new Error('Invalid');
    const p=data.project;
    App.data.pushUndo();
    const existing=getProjectById(p.id);
    if(existing){
      Object.assign(existing,App.util.clone(p));
    } else {
      App._state.projects.push(App.util.clone(p));
    }
    App.data.autoSave();App._refreshAll();App.toast.success('Imported');
  }catch(e){App.toast.error('Import failed');}
};

console.log('%c Classroom Seat Planner v2.0 %c Loaded ','background:#4361ee;color:#fff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold','background:#1a1a2e;color:#fff;padding:4px 8px;border-radius:0 4px 4px 0');
