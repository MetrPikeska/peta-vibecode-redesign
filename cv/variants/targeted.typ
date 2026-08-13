// ŠABLONA pro životopis cílený na konkrétní inzerát.
//
// Postup:
//   1. Zkopírovat na cv/targeted/<firma>.typ (ta složka je mimo git).
//   2. Podle inzerátu nastavit `tags` a `focus` — tím se vybere, které odrážky
//      a projekty se ukážou. Slovník tagů je popsán v cv/data/cv-data.typ.
//   3. Přepsat `headline` a `profile-text` na roli a firmu z inzerátu. Tohle je
//      jediné místo, kde se pro cílené CV píše nový text; fakta se nevymýšlejí,
//      jen se vybírají.
//   4. Přeskládat `sections` tak, aby nahoře stálo to, co inzerát žádá první.
//   5. Sestavit:
//      .\cv\build.ps1 -TargetFile cv\targeted\<firma>.typ -Lang en

#let profile = (
  id: "targeted",
  tags: ("geoai", "gis", "web", "3d", "biz", "full"),
  focus: none,
  max-bullets: 4,
  max-projects: 3,
  sections: ("profil", "praxe", "projekty", "dovednosti", "vzdelani", "certifikaty", "jazyky"),

  // Přebije `headlines` a `profiles` z datového souboru. Nech `none` a použije se
  // obecná varianta.
  headline: none,
  // headline: (cz: "GIS analytik · Detekce z obrazu", en: "GIS analyst · Image-based detection"),

  profile-text: none,
  // profile-text: (
  //   cz: [Sem přijde odstavec napsaný na míru inzerátu — proč právě tahle role,
  //     a které dvě věci z praxe na ni sedí nejvíc.],
  //   en: [The tailored opening paragraph goes here.],
  // ),
)
