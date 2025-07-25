import { useForm } from 'react-hook-form'
import './NewPost.css'

const NewPost = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm({
      defaultValues: {
        title: '',
        content: '',
        category: '',
        author: '',
        publishDate: '',
      }
    })
  const onSubmit = async (data) => {
    try {
      // Simular envío de datos
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Datos del post:', data)
      alert('¡Post creado exitosamente!')
      reset()
    } catch (error) {
      console.error('Error al crear el post:', error)
      alert('Error al crear el post. Intenta nuevamente.')
    }
  }

  const categories = [
    'Tecnología',
    'Programación',
    'Diseño',
    'Marketing',
    'Negocios',
    'Educación',
    'Estilo de vida',
    'Salud',
    'Viajes'
  ]

  return (
    <div className='newpost-container'>
      <div className='newpost-header'>
        <h1>Crear Nueva Entrada</h1>
        <p>Comparte tus ideas con el mundo</p>
      </div>

      <div className='newpost-form'>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Título del Post *
          </label>
          <input
            type='text'
            id='title'
            className='form-input' // TODO: Añadir clase de error si hay errores
            placeholder='Ingresa un título para tu post'
            {...register('title')}
          />
          {/* TODO: Mostrar mensaje de error */}
        </div>

        <div className='form-group'>
          <label htmlFor='content' className='form-label'>
            Contenido *
          </label>
          <textarea
            id='content'
            rows='6'
            className='form-textarea' // TODO: Añadir clase de error si hay
            placeholder='Escribe el contenido de tu post aquí...'
            {...register('content')}
          />
          {/* TODO: Mostrar mensaje de error */}
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='category' className='form-label'>
              Categoría *
            </label>
            <select
              id='category'
              className='form-select ' // TODO: Añadir clase de error si hay
              {...register('category')}
            >
              <option value=''>Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {/* TODO: Mostrar mensaje de error */}
          </div>

          <div className='form-group'>
            <label htmlFor='author' className='form-label'>
              Autor *
            </label>
            <input
              type='text'
              id='author'
              className='form-input ' // TODO: Añadir clase de error si hay
              placeholder='Tu nombre'
              {...register('author')}
            />
            {/* TODO: Mostrar mensaje de error */}
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='publishDate' className='form-label'>
            Fecha de Publicación *
          </label>
          <input
            type='datetime-local'
            id='publishDate'
            className='form-input ' // TODO: Añadir clase de error si hay
            {...register('publishDate')}
          />
          {/* TODO: Mostrar mensaje de error */}
        </div>

        <div className='form-actions'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => { reset() }}
          >
            Limpiar
          </button>
          <button
            type='button'
            className='btn btn-primary'
            // TODO: Añadir lógica para deshabilitar si se esta enviando el formulario.
            onClick={handleSubmit(onSubmit)}
          >
            {/* TODO: Añadir texto condicional al botón */}
            Publicar Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewPost
