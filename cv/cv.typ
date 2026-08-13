// Vstupní bod. Variantu a jazyk vybírá build skript přes `--input`.
//
//   typst compile --input variant=geoai --input lang=en cv/cv.typ out.pdf
//
// Dynamický `#import` v Typstu není, takže se importují všechny varianty
// a vybírá se ze slovníku. Neznámý název spadne s jasnou hláškou.

#import "lib/template.typ": cv
#import "lib/render.typ": render

#import "variants/general.typ"
#import "variants/geoai.typ"
#import "variants/gis.typ"
#import "variants/academic.typ"
#import "variants/targeted.typ"

#let variants = (
  general: general.profile,
  geoai: geoai.profile,
  gis: gis.profile,
  academic: academic.profile,
  targeted: targeted.profile,
)

#let vid = sys.inputs.at("variant", default: "general")
#let lang = sys.inputs.at("lang", default: "cz")

#if vid not in variants {
  panic("neznámá varianta '" + vid + "'; k dispozici: " + variants.keys().join(", "))
}
#if lang not in ("cz", "en") {
  panic("neznámý jazyk '" + lang + "'; k dispozici: cz, en")
}

#let profile = variants.at(vid)

#show: cv.with(lang: lang, subject: "CV — " + vid)

#render(profile, lang)
