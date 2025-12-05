import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Admin() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(() => localStorage.getItem("cheers-admin-token") || "");
  const [partners, setPartners] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", file: null });
  const [directorForm, setDirectorForm] = useState({
    name: "",
    role: "",
    file: null,
  });
  const [content, setContent] = useState({
    directorsVideoUrl: "",
    homeArticleLink: "",
    homeArticleTitle: "",
  });
  const [pdfs, setPdfs] = useState([]);
  const [pdfEdits, setPdfEdits] = useState({});
  // partners | directors | content | pdfs | newsletter
  const [activeTab, setActiveTab] = useState("partners");
  const [newsletterForm, setNewsletterForm] = useState({
        header: "",
        content: "",
        // file: null,
  });
  const isAuthed = Boolean(token);

  useEffect(() => {
    if (!token) return;
    fetchPartners();
    fetchDirectors();
    fetchContent();
    fetchPdfs();
  }, [token]);

  async function fetchPartners() {
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/partners", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) throw new Error("Unauthorized");
      const data = await res.json();
      if (data.message === "success") {
        setPartners(data.data);
        setStatus("success");
        setError("");
      } else {
        throw new Error(data.message || "Unable to load partners");
      }
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function fetchPdfs() {
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/pdfs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) throw new Error("Unauthorized");
      const data = await res.json();
      if (data.message === "success") {
        setPdfs(data.data);
        const edits = {};
        (data.data || []).forEach((p) => {
          edits[p.slot] = { title: p.title, file: null };
        });
        setPdfEdits(edits);
        setStatus("success");
        setError("");
      } else {
        throw new Error(data.message || "Unable to load PDFs");
      }
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function fetchDirectors() {
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/directors", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) throw new Error("Unauthorized");
      const data = await res.json();
      if (data.message === "success") {
        setDirectors(data.data);
        setStatus("success");
        setError("");
      } else {
        throw new Error(data.message || "Unable to load directors");
      }
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function fetchContent() {
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/content", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) throw new Error("Unauthorized");
      const data = await res.json();
      if (data.message === "success") {
        setContent((prev) => ({
          ...prev,
          ...data.data,
        }));
        setStatus("success");
        setError("");
      } else {
        throw new Error(data.message || "Unable to load content settings");
      }
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function handleReplacePdf(slot) {
    const edit = pdfEdits[slot] || {};
    if (!edit.title?.trim() && !edit.file) {
      setError("Provide a title or a new file to replace.");
      return;
    }
    setStatus("loading");
    try {
      const fd = new FormData();
      if (edit.title?.trim()) fd.append("title", edit.title.trim());
      if (edit.file) fd.append("pdf", edit.file);
      const res = await fetch(`/api/admin/pdfs/${slot}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || data.message !== "success") {
        throw new Error(data.message || "Could not replace PDF");
      }
      await fetchPdfs();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || data.message !== "success" || !data.token) {
        throw new Error(data.message || "Invalid credentials");
      }
      localStorage.setItem("cheers-admin-token", data.token);
      setToken(data.token);
      setPassword("");
      setStatus("success");
      setError("");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Name is required");
      return;
    }
    setStatus("loading");
    try {
      const fd = new FormData();
      fd.append("name", form.name.trim());
      if (form.file) {
        fd.append("img", form.file);
      }
      const res = await fetch("/api/admin/partners", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || data.message !== "success") {
        throw new Error(data.message || "Could not create partner");
      }
      setForm({ name: "", file: null });
      await fetchPartners();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function handleAddDirector(e) {
    e.preventDefault();
    if (!directorForm.name.trim()) {
      setError("Director name is required");
      return;
    }
    setStatus("loading");
    try {
      const fd = new FormData();
      fd.append("name", directorForm.name.trim());
      fd.append("role", directorForm.role.trim());
      if (directorForm.file) {
        fd.append("img", directorForm.file);
      }
      const res = await fetch("/api/admin/directors", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok || data.message !== "success") {
        throw new Error(data.message || "Could not create director");
      }
      setDirectorForm({ name: "", role: "", file: null });
      await fetchDirectors();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function handleSaveContent(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ updates: content }),
      });
      const data = await res.json();
      if (!res.ok || data.message !== "success") {
        throw new Error(data.message || "Could not save content");
      }
      setContent((prev) => ({ ...prev, ...data.data }));
      setStatus("success");
      setError("");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this partner?")) return;
    try {
      const res = await fetch(`/api/admin/partners/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Delete failed");
      await fetchPartners();
    } catch (err) {
      setError(err.message);
    }
  }

    async function handleAddNewsletter(e) {
        e.preventDefault();
        if (!newsletterForm.header.trim()) {
            setError("Header is required");
            return;
        }
        if (!newsletterForm.content.trim()) {
            setError("Content is required");
            return;
        }
        setStatus("loading");
        try {
            const fd = new FormData();
            fd.append("header", newsletterForm.header.trim());
            fd.append("content", newsletterForm.content.trim());
            //fd.append("pdf", newsletterForm.file);
            const res = await fetch("/api/admin/newsletter", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: fd,
            });
            const data = await res.json();
            if (!res.ok || data.message !== "success") {
                throw new Error(data.message || "Could not create newsletter");
            }
            setNewsletterForm({ header: "", content:""});//file: null
            alert("Newsletter Sent Successfully!");
        } catch (err) {
            setError(err.message);
            setStatus("error - no response");
        }
    }

  async function handleDeleteDirector(id) {
    if (!window.confirm("Delete this director?")) return;
    try {
      const res = await fetch(`/api/admin/directors/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Delete failed");
      await fetchDirectors();
    } catch (err) {
      setError(err.message);
    }
  }

  function handleLogout() {
    localStorage.removeItem("cheers-admin-token");
    setToken("");
    setPartners([]);
    setDirectors([]);
    setPdfs([]);
    setError("");
    setStatus("idle");
  }

  return (
    <>
      <Navbar />
      <main className="py-5">
        <div className="container">
          <div className="section-card shadow-soft mb-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
              <div>
                <div className="highlight-bar mb-1">Admin</div>
                <h2 className="h4 mb-0">Site Content Management</h2>
                <p className="text-muted mb-0">Manage partners, directors, and key page content.</p>
              </div>
              {isAuthed && (
                <button className="btn btn-outline-light text-dark" onClick={handleLogout}>
                  Log out
                </button>
              )}
            </div>

            {!isAuthed ? (
              <form className="row g-2" onSubmit={handleLogin}>
                <div className="col-12 col-md-6 col-lg-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <button className="btn btn-warning w-100" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Signing in..." : "Sign in"}
                  </button>
                </div>
                {error && (
                  <div className="col-12">
                    <div className="alert alert-danger mb-0">{error}</div>
                  </div>
                )}
              </form>
            ) : (
              <>
                <div className="d-flex gap-2 mb-3 flex-wrap">
                  <button
                    className={`btn ${activeTab === "partners" ? "btn-warning" : "btn-outline-secondary"}`}
                    type="button"
                    onClick={() => setActiveTab("partners")}
                  >
                    Partners
                  </button>
                  <button
                    className={`btn ${activeTab === "directors" ? "btn-warning" : "btn-outline-secondary"}`}
                    type="button"
                    onClick={() => setActiveTab("directors")}
                  >
                    Directors
                  </button>
                  <button
                    className={`btn ${activeTab === "content" ? "btn-warning" : "btn-outline-secondary"}`}
                    type="button"
                    onClick={() => setActiveTab("content")}
                  >
                    Content Settings
                  </button>
                  <button
                    className={`btn ${activeTab === "pdfs" ? "btn-warning" : "btn-outline-secondary"}`}
                    type="button"
                    onClick={() => setActiveTab("pdfs")}
                  >
                    PDFs
                  </button>
                    <button
                        className={`btn ${activeTab === "newsletter" ? "btn-warning" : "btn-outline-secondary"}`}
                        type="button"
                        onClick={() => setActiveTab("newsletter")}
                    >
                        Newsletter
                    </button>
                </div>

                {activeTab === "partners" && (
                  <>
                    <form className="row g-2 mb-4" onSubmit={handleAdd}>
                      <div className="col-12 col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Partner name"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        />
                      </div>
                      <div className="col-12 col-md-5">
                        <input
                          type="file"
                          className="form-control"
                          accept="image/*"
                          onChange={(e) =>
                            setForm((f) => ({ ...f, file: e.target.files?.[0] || null }))
                          }
                        />
                      </div>
                      <div className="col-12 col-md-3 col-lg-2">
                        <button className="btn btn-success w-100" type="submit" disabled={status === "loading"}>
                          Add
                        </button>
                      </div>
                    </form>

                    {status === "loading" && (
                      <div className="text-center text-muted">Loading...</div>
                    )}
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <div className="table-responsive">
                      <table className="table align-middle">
                        <thead>
                          <tr>
                            <th scope="col">Logo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image Path</th>
                            <th scope="col" className="text-end">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {partners.map((partner) => (
                            <tr key={partner._id}>
                              <td style={{ width: "120px" }}>
                                {partner.img ? (
                                  <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="img-fluid"
                                    style={{ maxHeight: "60px" }}
                                  />
                                ) : (
                                  <span className="text-muted small">No image</span>
                                )}
                              </td>
                              <td>{partner.name}</td>
                              <td className="text-muted small">{partner.img || "—"}</td>
                              <td className="text-end">
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => handleDelete(partner._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                          {partners.length === 0 && status === "success" && (
                            <tr>
                              <td colSpan="4" className="text-center text-muted">
                                No partners yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {activeTab === "directors" && (
                  <>
                    <form className="row g-2 mb-4" onSubmit={handleAddDirector}>
                      <div className="col-12 col-md-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Director name"
                          value={directorForm.name}
                          onChange={(e) =>
                            setDirectorForm((f) => ({ ...f, name: e.target.value }))
                          }
                        />
                      </div>
                      <div className="col-12 col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Role / title"
                          value={directorForm.role}
                          onChange={(e) =>
                            setDirectorForm((f) => ({ ...f, role: e.target.value }))
                          }
                        />
                      </div>
                      <div className="col-12 col-md-3">
                        <input
                          type="file"
                          className="form-control"
                          accept="image/*"
                          onChange={(e) =>
                            setDirectorForm((f) => ({ ...f, file: e.target.files?.[0] || null }))
                          }
                        />
                      </div>
                      <div className="col-12 col-md-1">
                        <button className="btn btn-success w-100" type="submit" disabled={status === "loading"}>
                          Add
                        </button>
                      </div>
                    </form>

                    {status === "loading" && (
                      <div className="text-center text-muted">Loading...</div>
                    )}
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <div className="table-responsive">
                      <table className="table align-middle">
                        <thead>
                          <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Image Path</th>
                            <th scope="col" className="text-end">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {directors.map((director) => (
                            <tr key={director._id}>
                              <td style={{ width: "120px" }}>
                                {director.img ? (
                                  <img
                                    src={director.img}
                                    alt={director.name}
                                    className="img-fluid rounded-circle"
                                    style={{ maxHeight: "60px" }}
                                  />
                                ) : (
                                  <span className="text-muted small">No image</span>
                                )}
                              </td>
                              <td>{director.name}</td>
                              <td className="text-muted">{director.role || "—"}</td>
                              <td className="text-muted small">{director.img || "—"}</td>
                              <td className="text-end">
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => handleDeleteDirector(director._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                          {directors.length === 0 && status === "success" && (
                            <tr>
                              <td colSpan="5" className="text-center text-muted">
                                No directors yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {activeTab === "content" && (
                  <form className="row g-3" onSubmit={handleSaveContent}>
                    <div className="col-12 col-lg-6">
                      <label className="form-label fw-semibold">Directors Page Video URL (YouTube)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://www.youtube.com/embed/..."
                        value={content.directorsVideoUrl}
                        onChange={(e) =>
                          setContent((c) => ({ ...c, directorsVideoUrl: e.target.value }))
                        }
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label fw-semibold">Home Article Link</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://example.com/article"
                        value={content.homeArticleLink}
                        onChange={(e) =>
                          setContent((c) => ({ ...c, homeArticleLink: e.target.value }))
                        }
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label className="form-label fw-semibold">Home Article Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="508 C.H.E.E.R.S. gives youth in Worcester second chance!"
                        value={content.homeArticleTitle}
                        onChange={(e) =>
                          setContent((c) => ({ ...c, homeArticleTitle: e.target.value }))
                        }
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success" type="submit" disabled={status === "loading"}>
                        Save Content
                      </button>
                    </div>
                  </form>
                )}

                {activeTab === "pdfs" && (
                  <>
                    {status === "loading" && (
                      <div className="text-center text-muted">Loading...</div>
                    )}
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <div className="table-responsive">
                      <table className="table align-middle">
                        <thead>
                          <tr>
                            <th scope="col">PDF Slot</th>
                            <th scope="col">Title</th>
                            <th scope="col">Current Link / Replace File</th>
                            <th scope="col" className="text-end">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pdfs.map((pdf) => (
                            <tr key={pdf.slot}>
                              <td className="fw-semibold">PDF {pdf.slot}</td>
                              <td style={{ minWidth: "180px" }}>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  value={pdfEdits[pdf.slot]?.title || ""}
                                  onChange={(e) =>
                                    setPdfEdits((prev) => ({
                                      ...prev,
                                      [pdf.slot]: { ...(prev[pdf.slot] || {}), title: e.target.value },
                                    }))
                                  }
                                />
                              </td>
                              <td className="text-muted small">
                                {pdf.url ? (
                                  <a href={pdf.url} target="_blank" rel="noreferrer">
                                    {pdf.url}
                                  </a>
                                ) : (
                                  <span className="text-muted">No file yet</span>
                                )}
                                <div className="mt-2">
                                  <input
                                    type="file"
                                    accept="application/pdf"
                                    className="form-control form-control-sm"
                                    onChange={(e) =>
                                      setPdfEdits((prev) => ({
                                        ...prev,
                                        [pdf.slot]: {
                                          ...(prev[pdf.slot] || {}),
                                          file: e.target.files?.[0] || null,
                                        },
                                      }))
                                    }
                                  />
                                </div>
                              </td>
                              <td className="text-end">
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  type="button"
                                  onClick={() => handleReplacePdf(pdf.slot)}
                                  disabled={status === "loading"}
                                >
                                  Save / Replace
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {activeTab === "newsletter" && (
                    <>
                    {status === "loading" && (
                        <div className="text-center text-muted">Loading...</div>
                    )}
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                        <form className="row g-2 mb-4" onSubmit={handleAddNewsletter}>
                            <div className="col-12 col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Header"
                                    value={newsletterForm.header}
                                    onChange={(e) =>
                                        setNewsletterForm((f) => ({ ...f, header: e.target.value }))
                                    }
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Content"
                                    value={newsletterForm.content}
                                    onChange={(e) =>
                                        setNewsletterForm((f) => ({ ...f, content: e.target.value }))
                                    }
                                />
                            </div>
                            {/*
                            <div className="col-12 col-md-3">
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf"
                                    onChange={(e) =>
                                        setNewsletterForm((f) => ({ ...f, file: e.target.files?.[0] || null }))
                                    }
                                />
                            </div>
                            */}
                            <div className="col-12 col-md-2">
                                <button className="btn btn-success w-100" type="submit" disabled={status === "loading"}>
                                    Send Newsletter
                                </button>
                            </div>
                        </form>
                    </>
                )}

              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Admin;
