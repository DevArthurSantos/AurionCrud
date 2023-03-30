-- CreateTable
CREATE TABLE "_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ip" TEXT NOT NULL,
    "request_caunt" INTEGER NOT NULL,
    "validade" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_instancias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "InstanciaName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_client_instancias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_cliet" TEXT NOT NULL,
    "id_instancia" TEXT NOT NULL,
    CONSTRAINT "_client_instancias_id_cliet_fkey" FOREIGN KEY ("id_cliet") REFERENCES "_clients" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_client_instancias_id_instancia_fkey" FOREIGN KEY ("id_instancia") REFERENCES "_instancias" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_entitys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityValue" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_instancia_entity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_instancia" TEXT NOT NULL,
    "id_entity" TEXT NOT NULL,
    CONSTRAINT "_instancia_entity_id_instancia_fkey" FOREIGN KEY ("id_instancia") REFERENCES "_instancias" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_instancia_entity_id_entity_fkey" FOREIGN KEY ("id_entity") REFERENCES "_entitys" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_clients_ip_key" ON "_clients"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "_instancias_InstanciaName_key" ON "_instancias"("InstanciaName");
