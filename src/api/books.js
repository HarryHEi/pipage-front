import request from '@/utils/request'

export function getBooks(page = 1, page_size = 10) {
  return request({
    url: '/api/books/book/',
    method: 'get',
    params: {
      page, page_size
    }
  })
}

export function getBookSections(book, page = 1, page_size = 10) {
  return request({
    url: '/api/books/section/',
    method: 'get',
    params: {
      book, page, page_size
    }
  })
}

export function getBookSectionInfo(section) {
  return request({
    url: '/api/books/section/' + section + '/',
    method: 'get'
  })
}

export function getBookNextSection(section) {
  return request({
    url: '/api/books/section/' + section + '/get_next/',
    method: 'get'
  })
}

export function getBookSectionContent(section, page = 1, page_size = 10) {
  return request({
    url: '/api/books/content/',
    method: 'get',
    params: {
      section, page, page_size
    }
  })
}
