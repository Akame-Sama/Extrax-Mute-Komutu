module.exports = {
  name:"mute-sistemi",
  code:`
  $if[$message[1]==rol]
  $description[
  $getVar[tick] | <@$authorID> Mute-Rol Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı]
  $setServerVar[muterol;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;$getVar[çarpı]  | <@$authorID> Lütfen Bir Rol Etiketle]
  $endif
  $if[$message[1]==yetkili]
  $description[
  $getVar[tick] | <@$authorID> Mute-Yetkili Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı]
  $setServerVar[muteyetkili;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;$getVar[çarpı]  | <@$authorID> Lütfen Bir Rol Etiketle]
  $endif
  $if[$message[1]==log]
  $description[
  $getVar[tick] | <@$authorID> Mute-Log Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı]
  $setServerVar[mutelog;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;$getVar[çarpı]  | <@$authorID> Lütfen Bir Rol Etiketle]
  $endif
  $if[$message[1]==unmuterol]
  $description[
  $getVar[tick] | <@$authorID> Unmute-Rol Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı 
  ]
  $setServerVar[unmute;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;$getVar[çarpı] | <@$authorID> Lütfen Bir Rol Etiketle.]
  $endif
  $onlyIf[$checkContains[$tolowerCase[$message[1]];unmuterol;log;yetkili;rol]==true;$getVar[tick] | <@$authorID> Lütfen Bir Argüman Gir \`\ unmuterol,rol,yetkili,log\`\
  $onlyPerms[admin;$getVar[admin]]
  `
}
