"use client"

import { useState } from "react"
import { Folder, FileText, Plus, Search } from "lucide-react"

type Item = {
  name: string
  type: "folder" | "file"
  createdAt?: number
  children?: Item[]
}

const initialData: Item[] = [
  {
    name: "Sem 5",
    type: "folder",
    children: [
      {
        name: "DBMS",
        type: "folder",
        children: [
          {
            name: "Unit 1 Notes.pdf",
            type: "file",
            createdAt: Date.now() - 100000,
          },
          {
            name: "PYQs.doc",
            type: "file",
            createdAt: Date.now() - 500000,
          },
        ],
      },
    ],
  },
]

export default function ResourcesPage() {
  const [data, setData] = useState<Item[]>(initialData)
  const [path, setPath] = useState<Item[]>([])
  const [search, setSearch] = useState("")

  const currentLevel =
    path.length === 0
      ? data
      : path[path.length - 1].children || []

  const openFolder = (item: Item) => {
    if (item.type === "folder") {
      setPath([...path, item])
    }
  }

  const goBack = () => {
    setPath(path.slice(0, -1))
  }

  // 🔍 Flatten all files for search + recent
  const getAllFiles = (items: Item[]): Item[] => {
    let files: Item[] = []
    items.forEach((item) => {
      if (item.type === "file") files.push(item)
      if (item.children) {
        files = files.concat(getAllFiles(item.children))
      }
    })
    return files
  }

  const allFiles = getAllFiles(data)

  // 🔍 Search results
  const searchResults = allFiles.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  )

  // 🕒 Recently added
  const recentFiles = [...allFiles]
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
    .slice(0, 4)

  return (
    <div className="h-full overflow-y-auto px-6 py-6 space-y-6">

      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4">

        {/* Search */}
        <div className="flex items-center gap-2 w-full max-w-md bg-[#0F0F0F] border border-zinc-900 rounded-lg px-3 py-2">
          <Search size={16} className="text-zinc-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search files..."
            className="bg-transparent outline-none text-sm text-white w-full placeholder-zinc-500"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:bg-zinc-800">
            <Plus size={14} /> Folder
          </button>

          <button className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:bg-zinc-800">
            <Plus size={14} /> File
          </button>
        </div>
      </div>

      {/* 🔍 SEARCH MODE */}
      {search ? (
        <div className="space-y-4">
          <p className="text-sm text-zinc-500">Search Results</p>

          <div className="grid grid-cols-5 gap-4">
            {searchResults.map((file, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] border border-zinc-900 rounded-xl p-4"
              >
                <FileText size={28} className="text-zinc-500 mb-2" />
                <p className="text-sm text-white truncate">{file.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* 🕒 Recently Added */}
          {path.length === 0 && (
            <div className="space-y-3">
              <p className="text-sm text-zinc-500">Recently Added</p>

              <div className="grid grid-cols-4 gap-4">
                {recentFiles.map((file, i) => (
                  <div
                    key={i}
                    className="bg-[#0A0A0A] border border-zinc-900 rounded-xl p-4 hover:bg-zinc-900 transition"
                  >
                    <FileText size={20} className="text-zinc-500 mb-2" />
                    <p className="text-sm text-white truncate">
                      {file.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span
              onClick={() => setPath([])}
              className="cursor-pointer hover:text-white"
            >
              Resources
            </span>

            {path.map((p, i) => (
              <span key={i} className="flex items-center gap-2">
                /
                <span className="text-white">{p.name}</span>
              </span>
            ))}
          </div>

          {/* Back */}
          {path.length > 0 && (
            <button
              onClick={goBack}
              className="text-xs text-zinc-500 hover:text-white"
            >
              ← Back
            </button>
          )}

          {/* Folder Grid */}
          <div className="grid grid-cols-5 gap-4">
            {currentLevel.map((item, i) => (
              <div
                key={i}
                onClick={() => openFolder(item)}
                className="group bg-[#0A0A0A] border border-zinc-900 rounded-xl p-4 cursor-pointer hover:bg-zinc-900 transition"
              >
                <div className="mb-3">
                  {item.type === "folder" ? (
                    <Folder size={32} className="text-zinc-400 group-hover:text-white" />
                  ) : (
                    <FileText size={28} className="text-zinc-500" />
                  )}
                </div>

                <p className="text-sm text-zinc-300 truncate group-hover:text-white">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}